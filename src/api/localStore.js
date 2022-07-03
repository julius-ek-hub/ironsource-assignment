const getApiMode = () => window.localStorage.getItem("api_mode") || "random";

const setApiMode = (newApiMode) => {
	try {
		window.localStorage.setItem("api_mode", newApiMode);
	} catch (error) {
		console.log(error);
	}
};

const getContacts = () => {
	const result = window.localStorage.getItem(getApiMode());
	if (!result) return [];

	return JSON.parse(result);
};

const saveContact = (newValues) => {
	let all = getContacts();
	try {
		newValues = Array.isArray(newValues) ? newValues : [newValues];
		newValues.forEach((newValue) => {
			if (all.some(({ _id }) => newValue._id === _id)) return;
			all.push(newValue);
		});
		window.localStorage.setItem(getApiMode(), JSON.stringify(all));
	} catch (e) {
		console.log(e);
	}
	return all;
};

export const deleteContact = (_id) => {
	const all = getContacts();
	const allNow = all.filter((contact) => contact._id !== _id);
	return localStorage.setItem(getApiMode(), JSON.stringify(allNow));
};

const localStore = {
	saveContact,
	getContacts,
	deleteContact,
	setApiMode,
	getApiMode,
	getPage: (mode) => Number(window.localStorage.getItem(mode + "_page") || 0),
	setPage: (mode, value) => window.localStorage.setItem(mode + "_page", value),
};

export default localStore;
