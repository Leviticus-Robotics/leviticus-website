export interface TeamMember {
	name: string;
	role: string;
	bio: string;
	experiences: string[];
}

export interface Sponsor {
	name: string;
	level: string;
	url: string;
}

export interface NavLink {
	href: string;
	label: string;
}

export interface ContactLink {
	label: string;
	value: string;
	href: string;
}
