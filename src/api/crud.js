export const _fetch = async (url, props) => {
	const result = await fetch(url, props);
	return await result.json();
};

const isJSON = (body) => ({
	body: JSON.stringify(body),
	headers: { "Content-Type": "application/json" },
});

export const post = (url, body) =>
	_fetch(url, { method: "POST", ...isJSON(body) });

export const get = (url) => _fetch(url);

export const put = (url, body) =>
	_fetch(url, { method: "PUT", ...isJSON(body) });

export const _delete = (url) => _fetch(url, { method: "DELETE" });
