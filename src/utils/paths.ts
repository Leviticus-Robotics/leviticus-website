const trimSlashes = (value: string) => value.replace(/^\/+|\/+$/g, "");

export const sitePath = (path: string, base = import.meta.env.BASE_URL): string => {
	const normalizedBase = trimSlashes(base);
	const normalizedPath = trimSlashes(path);
	const prefix = normalizedBase ? `/${normalizedBase}` : "";

	return normalizedPath ? `${prefix}/${normalizedPath}/` : `${prefix}/`;
};
