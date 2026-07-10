import type { ContactLink } from "../types/content";

export const siteLinks = {
	email: "mailto:leviticus36099@gmail.com",
	github: "https://github.com/Leviticus-Robotics",
	hcb: "https://hcb.hackclub.com/leviticus-robotics",
	instagram: "https://www.instagram.com/leviticus.robotics/",
} as const;

export const contactLinks: ContactLink[] = [
	{
		label: "Email",
		value: "leviticus36099@gmail.com",
		href: siteLinks.email,
	},
	{
		label: "Instagram",
		value: "@leviticus.robotics",
		href: siteLinks.instagram,
	},
];
