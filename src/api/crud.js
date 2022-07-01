export const _fetch = async (url, props) => {
	const result = await fetch(url, props);
	return await result.json();
};

export const post = (url, body) => _fetch(url, { body, method: "POST" });
export const get = (url) => _fetch(url);
export const put = (url, body) => _fetch(url, { body, method: "PUT" });
export const _delete = (url) => _fetch(url, { method: "DELETE" });
