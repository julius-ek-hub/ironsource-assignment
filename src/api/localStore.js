export const save = (contacts) => {
	window.localStorage.setItem("contacts", JSON.stringify(contacts));
	return contacts;
};

export const getAll = () => {
	const result = window.localStorage.getItem("contacts");
	if (!result) return [];

	return JSON.parse(result);
};

export const add = (newSet) => {
	const all = getAll();
	all.push(newSet);
	return save(all);
};

export const deleteContact = (idValue) => {
	const all = getAll();
	const allNow = all.filter((contact) => contact.id.value !== idValue);
	return save(allNow);
};
