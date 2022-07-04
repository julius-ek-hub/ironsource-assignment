import * as crud from "./crud";
import localStore from "./localStore";

import {
	sleep,
	transformContactToMatchApiResponse,
	transformContactToHaveDateAsObject,
} from "../utils";

const RANDOM_USERS_BASE_URL = "https://randomuser.me/api/";
const REAL_USERS_BASE_URL =
	"https://ironsource-assignment-backend.herokuapp.com/api/contacts/";

const getContactsRandom = async (page, limit = 10) => {
	const result_10 = await Promise.all(
		[...new Array(limit)].map(async () => {
			const { results } = await crud.get(RANDOM_USERS_BASE_URL);
			return results.map((result) => ({
				...result,
				_id: result.login.uuid, // mocking real api _id
			}));
		}),
	);

	return result_10.flat();
};
export const isRandomApiMode = () => localStore.getApiMode() === "random";

// Simulating Async
const sleepThenReturn = async (value) => {
	await sleep(100);
	return value;
};

const getContacts = (page = 0, limit = 10) => {
	if (isRandomApiMode()) return getContactsRandom();

	return crud.get(REAL_USERS_BASE_URL + `?page=${page}&limit=${limit}`);
};

const deleteContact = (_id) => {
	if (isRandomApiMode()) return sleepThenReturn(_id);

	return crud._delete(REAL_USERS_BASE_URL + _id);
};

const updateContact = async (_new) => {
	const transform = transformContactToHaveDateAsObject(_new);
	if (isRandomApiMode()) return sleepThenReturn(transform);

	return crud.put(REAL_USERS_BASE_URL, transform);
};

const saveContact = async (body) => {
	const randomUser = await crud.get(RANDOM_USERS_BASE_URL); // Just to get picture

	const details = {
		...transformContactToHaveDateAsObject(body),
		picture: randomUser.results[0].picture,
	};

	if (isRandomApiMode()) {
		return await sleepThenReturn(transformContactToMatchApiResponse(details));
	}

	return await crud.post(REAL_USERS_BASE_URL, details);
};

const services = {
	saveContact,
	getContacts,
	deleteContact,
	updateContact,
};

export default services;
