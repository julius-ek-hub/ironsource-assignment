import { useState, useEffect } from "react";

import * as services from "../api/services";
import * as localStore from "../api/localStore";

function useContactListings() {
	const [contacts, setContacts] = useState([]);
	const [fetchingContacts, setFetchingContact] = useState(false);
	const [loading, setLoading] = useState(true);
	const [contactBeingDeleted, setContactBeingDeleted] = useState(null);
	const [errorFetchingContact, setErrorFetchingContact] = useState([]);

	const fetchContacts = async () => {
		if (fetchingContacts || loading) return;

		try {
			setErrorFetchingContact(null);
			setFetchingContact(true);
			const newContacts = await services.getContacts();
			const jointContacts = [...contacts, ...newContacts.results];
			setContacts(jointContacts);
			localStore.save(jointContacts);
		} catch (e) {
			const offline = !window.navigator.onLine;
			const offlineError =
				"Please check your internet connection and try again.";
			setErrorFetchingContact(
				`Error fetching posts ${offline ? offlineError : ""}`,
			);
		} finally {
			setFetchingContact(false);
		}
	};

	const deleteContact = async (contactId) => {
		try {
			setContactBeingDeleted(contactId);
			await services.deleteContact(contactId);
			setContacts(contacts.filter(({ id }) => id.value !== contactId));
			localStore.deleteContact(contactId);
		} catch (err) {
			console.log(err);
		} finally {
			setContactBeingDeleted(null);
		}
	};

	useEffect(() => {
		setLoading(false);
		const stored = localStore.getAll();
		if (stored.length > 0) return setContacts(stored);
		fetchContacts();

		// eslint-disable-next-line
	}, [loading]);

	return {
		contacts,
		fetchingContacts,
		errorFetchingContact,
		contactBeingDeleted,
		fetchContacts,
		deleteContact,
	};
}

export default useContactListings;
