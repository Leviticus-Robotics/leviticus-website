const externalPattern = /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i;

export function withBase(path: string): string {
	if (externalPattern.test(path)) {
		return path;
	}

	const base = import.meta.env.BASE_URL.endsWith("/")
		? import.meta.env.BASE_URL
		: `${import.meta.env.BASE_URL}/`;
	const normalizedPath = path.replace(/^\/+/, "");

	if (normalizedPath === "") {
		return base;
	}

	return `${base}${normalizedPath}`;
}
