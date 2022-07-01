import * as crud from "./crud";

const USERS_BASE_URL = "https://randomuser.me/api";

export const deleteContact = (id) => crud._delete(USERS_BASE_URL + id);

// Fetching 10 at a time from the random users api.

export const getContacts = async () => {
	const result_10 = await Promise.all(
		[...new Array(10)].map(async () => {
			const { results } = await crud.get(USERS_BASE_URL);
			return results;
		}),
	);

	return { results: result_10.flat() };
};

// const getContactsFromOwnServer = () => {
// 	// Caught up
// };
