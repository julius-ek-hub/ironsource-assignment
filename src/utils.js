/**
 * Lets you pick props down the prop chain of an object using the prop chain as a string.
 *
 * @param {{}} obj
 * @param {String} propChain
 * @example
 * const obj = {
 *      a: {
 *        b: {
 *           c: 'Hello World'
 *        }
 *     }
 * }
 * const helloWorld = pick(obj, 'a.b.c');
 */

export const pick = (obj, propChain) => {
	if (!obj || Object.keys(obj).length === 0) return undefined;
	const chain = propChain.split(".");
	const currentValue = obj[chain[0]];
	if (chain.length === 1) return currentValue;
	return pick(currentValue, chain.slice(1).join("."));
};

export const sleep = (duration = 1000) => {
	return new Promise((res) => setTimeout(res, duration));
};

export const sortContactsBy = (value, contacts) => {
	return contacts.sort((a, b) => {
		return String(pick(a, value)).localeCompare(String(pick(b, value)));
	});
};

export const noInternetError = () => {
	return window.navigator.onLine
		? ""
		: " Please check your connection and try again.";
};

// API might return redunant results, we make them unique here

export const uniqueContacts = (...all) => {
	const result = [];

	const populate = (items) => {
		items.forEach((item) => {
			if (!result.some(({ _id }) => _id === item._id)) result.push(item);
		});
	};

	all.map(populate);

	return result;
};

export const capitalizeFirstLetter = (str) =>
	str[0].toUpperCase() + str.split("").slice(1).join("");

export const YY_MM_DD = (date) => {
	const pre_0 = (str) => "0".repeat(2 - str.length || 0) || "";

	const arrange = (_date) => {
		const [m, d, y] = new Date(_date).toLocaleDateString().split("/");
		return `${y}-${pre_0(m) + m}-${pre_0(d) + d}`;
	};
	// Sometimes the date is empty from random API so we try
	try {
		return arrange(date);
	} catch (e) {
		return arrange(new Date());
	}
};

export const transformContactToMatchApiResponse = function (details) {
	const dob = details.dob.date;
	return {
		...details,
		_id: details._id || String(Math.random(1000) + Date.now()),
		dob: {
			date: dob,
			age: new Date().getFullYear() - new Date(dob).getFullYear(),
		},
	};
};

export const transformContactToHaveDateAsObject = (contact) => {
	return transformContactToMatchApiResponse({
		...contact,
		dob: { date: contact.dob },
	});
};
