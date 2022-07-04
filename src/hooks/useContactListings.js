import { useState, useEffect, useContext } from "react";

import services from "../api/services";
import localStore from "../api/localStore";

import ThemeControlContext from "../contexts/ThemeControlContext";
import useTheme from "@mui/material/styles/useTheme";

import {
	sortContactsBy,
	noInternetError,
	uniqueContacts,
	setAddressBarColor,
} from "../utils";

function useContactListings() {
	const [contacts, setContacts] = useState({ real: [], random: [] });
	const { setMode } = useContext(ThemeControlContext);
	const { palette } = useTheme();

	const [fetchingContacts, setFetchingContact] = useState(false);
	const [loading, setLoading] = useState(true);
	const [errorFetchingContact, setErrorFetchingContact] = useState(null);

	const modes = { random: "random", real: "real" };
	const [isSortedBy, sortBy] = useState("name.first");
	const [apiMode, _setApiMode] = useState(modes.random);
	const [darkMode, _setDarkMode] = useState(false);
	const [page, setPage] = useState({ real: 0, random: 0 });
	const [selected, setSelected] = useState([]);
	const [loadMoreOnscroll, _setLoadMoreOnscroll] = useState(true);

	const doSetContacts = (newContacts) => {
		setContacts({
			...contacts,
			[apiMode]: sortContactsBy(isSortedBy, newContacts),
		});
	};

	const setApiMode = (newMode) => {
		localStore.setApiMode(newMode);
		_setApiMode(newMode);
	};

	const setLoadMoreOnscroll = (newMode) => {
		localStore.setLoadOnScroll(newMode);
		_setLoadMoreOnscroll(newMode);
	};

	const setDarkMode = (dark) => {
		localStore.setDarkMode(dark);
		_setDarkMode(dark);
		setMode(dark ? "dark" : "light");
	};

	const incrementPage = () => {
		const newValue = Math.floor(contacts[apiMode].length / 10);
		setPage({
			...page,
			[apiMode]: newValue,
		});

		localStore.setPage(apiMode, newValue);
	};

	const fetchContacts = async () => {
		if (fetchingContacts || loading) return;
		try {
			setErrorFetchingContact(null);
			setFetchingContact(true);
			const newContacts = await services.getContacts(page[apiMode]);
			if (newContacts.length > 0) {
				const jointContacts = uniqueContacts(contacts[apiMode], newContacts);
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

	const deleteContact = async (__id) => {
		const toBeDeletd = Array.isArray(__id) ? __id : [__id];

		await Promise.all(toBeDeletd.map((_id) => services.deleteContact(_id)));

		doSetContacts(
			contacts[apiMode].filter(({ _id }) => !toBeDeletd.includes(_id)),
		);

		toBeDeletd.forEach((_id) => localStore.deleteContact(_id));
		setSelected(selected.filter((_id) => !toBeDeletd.includes(_id)));
	};

	const saveContact = async (details) => {
		const result = await services.saveContact(details);
		localStore.saveContact(result);
		doSetContacts([...contacts.real, result]);
	};

	const updateContact = async (details) => {
		const result = await services.updateContact(details);
		localStore.updateContact(result);
		doSetContacts([
			...contacts[apiMode].filter(({ _id }) => _id !== details._id),
			result,
		]);
	};

	useEffect(() => {
		setLoading(false);
		setApiMode(localStore.getApiMode());
		setDarkMode(localStore.getDarkMode());
		setAddressBarColor(palette.background.paper);
		setLoadMoreOnscroll(localStore.getLoadOnScroll());
		setSelected([]);
		setPage({
			real: localStore.getPage(modes.real),
			random: localStore.getPage(modes.random),
		});
		const stored = localStore.getContacts();
		if (stored.length > 0) return doSetContacts(stored);
		fetchContacts();

		// eslint-disable-next-line
	}, [loading, apiMode, isSortedBy, palette.mode]);

	return {
		contacts,
		fetchingContacts,
		errorFetchingContact,
		apiMode,
		modes,
		selected,
		isSortedBy,
		loadMoreOnscroll,
		darkMode,
		updateContact,
		setDarkMode,
		setLoadMoreOnscroll,
		setSelected,
		setApiMode,
		saveContact,
		fetchContacts,
		deleteContact,
		sortBy,
	};
}

export default useContactListings;
