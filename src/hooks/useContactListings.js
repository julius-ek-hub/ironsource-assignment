import { useState, useEffect } from "react";

import services from "../api/services";
import localStore from "../api/localStore";

import { sortContactsBy, noInternetError, uniqueContacts } from "../utils";

function useContactListings() {
	const [contacts, setContacts] = useState({ real: [], random: [] });
	const [fetchingContacts, setFetchingContact] = useState(false);
	const [loading, setLoading] = useState(true);
	const [errorFetchingContact, setErrorFetchingContact] = useState(null);

	const modes = { random: "random", real: "real" };
	const [isSortedBy, sortBy] = useState("name.first");
	const [mode, setMode] = useState(modes.random);
	const [page, setPage] = useState({ real: 0, random: 0 });
	const [selected, setSelected] = useState([]);

	const doSetContacts = (newContacts) => {
		setContacts({
			...contacts,
			[mode]: sortContactsBy(isSortedBy, newContacts),
		});
	};

	const setApiMode = (newMode) => {
		localStore.setApiMode(newMode);
		setMode(newMode);
	};

	const incrementPage = () => {
		const newValue = Math.floor(contacts[mode].length / 10);
		setPage({
			...page,
			[mode]: newValue,
		});

		localStore.setPage(mode, newValue);
	};

	const fetchContacts = async () => {
		if (fetchingContacts || loading) return;
		try {
			setErrorFetchingContact(null);
			setFetchingContact(true);
			const newContacts = await services.getContacts(page[mode]);
			if (newContacts.length > 0) {
				const jointContacts = uniqueContacts(contacts[mode], newContacts);
				doSetContacts(jointContacts);
				localStore.saveContact(jointContacts);
				incrementPage();
			}
		} catch (e) {
			setErrorFetchingContact(`Error fetching contacts. ${noInternetError()}`);
		} finally {
			setFetchingContact(false);
		}
	};

	const deleteContacts = async (__id) => {
		const toBeDeletd = Array.isArray(__id) ? __id : [__id];

		await Promise.all(toBeDeletd.map((_id) => services.deleteContact(_id)));

		doSetContacts(
			contacts[mode].filter(({ _id }) => !toBeDeletd.includes(_id)),
		);

		toBeDeletd.forEach((_id) => localStore.deleteContact(_id));
		setSelected(selected.filter((_id) => !toBeDeletd.includes(_id)));
	};

	const saveContact = async (details) => {
		if (mode === modes.random) return;
		const result = await services.saveContact(details);
		localStore.saveContact(result);
		doSetContacts([...contacts.real, result]);
	};

	useEffect(() => {
		setLoading(false);
		setMode(localStore.getApiMode);
		setSelected([]);
		setPage({
			real: localStore.getPage(modes.real),
			random: localStore.getPage(modes.random),
		});
		const stored = localStore.getContacts();
		if (stored.length > 0) return doSetContacts(stored);
		fetchContacts();

		// eslint-disable-next-line
	}, [loading, mode, isSortedBy]);

	return {
		contacts,
		fetchingContacts,
		errorFetchingContact,
		mode,
		modes,
		selected,
		isSortedBy,
		setSelected,
		setApiMode,
		saveContact,
		fetchContacts,
		deleteContact: deleteContacts,
		sortBy,
	};
}

export default useContactListings;
