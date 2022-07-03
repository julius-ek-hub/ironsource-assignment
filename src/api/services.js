import * as crud from "./crud";
import localStore from "./localStore";

const RANDOM_USERS_BASE_URL = "https://randomuser.me/api/";
const REAL_USERS_BASE_URL =
	"https://ironsource-assignment-backend.herokuapp.com/api/contacts/";

// Random API

const getContactsRandom = async (page, limit = 10) => {
	const result_10 = await Promise.all(
		[...new Array(limit)].map(async () => {
			const { results } = await crud.get(RANDOM_USERS_BASE_URL);
			return results.map((result) => ({
				...result,
				_id: result.login.uuid, // mocking real api
			}));
		}),
	);

	return result_10.flat();
};

// Real API

const getContacts = (page = 0, limit = 10) => {
	const apiMode = localStore.getApiMode();
	if (apiMode === "random") return getContactsRandom();
	return crud.get(REAL_USERS_BASE_URL + `?page=${page}&limit=${limit}`);
};

const deleteContact = (id) => {
	const apiMode = localStore.getApiMode();
	if (apiMode === "random") return Promise.resolve();
	return crud._delete(REAL_USERS_BASE_URL + id);
};

const saveContact = async (body) => {
	const apiMode = localStore.getApiMode();
	if (apiMode === "random") return Promise.resolve();

	const randomUser = await crud.get(RANDOM_USERS_BASE_URL);

	return await crud.post(REAL_USERS_BASE_URL, {
		...body,
		dob: { date: body.dob },
		picture: randomUser.results[0].picture,
	});
};

const services = {
	saveContact,
	getContacts,
	deleteContact,
};

export default services;
