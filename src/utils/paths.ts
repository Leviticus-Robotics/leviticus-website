import path from "path";

const trimSlashes = (value: string) => value.replace(/^\/+|\/+$/g, "");

export const sitePath = (url: string, base = import.meta.env.BASE_URL): string => {
	if (!path.isAbsolute(url)) {
		return url;
	}

	const normalizedBase = trimSlashes(base);
	const normalizedPath = trimSlashes(url);
	const prefix = normalizedBase ? `/${normalizedBase}` : "";

	return normalizedPath ? `${prefix}/${normalizedPath}/` : `${prefix}/`;
};
