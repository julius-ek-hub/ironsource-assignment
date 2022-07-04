const setItem = (key, value) => window.localStorage.setItem(key, value);
const getItem = (key) => window.localStorage.getItem(key);

const getApiMode = () => getItem("api_mode") || "random";

const setApiMode = (newApiMode) => {
	try {
		setItem("api_mode", newApiMode);
	} catch (error) {
		console.log(error);
	}
};

const getContacts = () => {
	const result = getItem(getApiMode());
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
		setItem(getApiMode(), JSON.stringify(all));
	} catch (e) {
		console.log(e);
	}
	return all;
};

export const deleteContact = (_id) => {
	const all = getContacts();
	const allNow = all.filter((contact) => contact._id !== _id);
	return setItem(getApiMode(), JSON.stringify(allNow));
};

export const updateContact = (newContac) => {
	const all = getContacts();
	const allNow = all.filter((contact) => contact._id !== newContac._id);
	return setItem(getApiMode(), JSON.stringify([...allNow, newContac]));
};

const localStore = {
	saveContact,
	getContacts,
	deleteContact,
	updateContact,
	setApiMode,
	getApiMode,
	getPage: (apiMode) => Number(getItem(apiMode + "_page") || 0),
	setPage: (apiMode, value) => setItem(apiMode + "_page", value),
	setDarkMode: (value) => setItem("dark_mode", value),
	getDarkMode: () => (getItem("dark_mode") === "true" ? true : false),
	getLoadOnScroll: () => (getItem("load_on_scroll") === "true" ? true : false),
	setLoadOnScroll: (value) => setItem("load_on_scroll", value),
	reset: () => {
		[
			"dark_mode",
			"real_page",
			"random_page",
			"api_mode",
			"random",
			"real",
			"load_on_scroll",
		].map((key) => window.localStorage.removeItem(key));
	},
};

export default localStore;
