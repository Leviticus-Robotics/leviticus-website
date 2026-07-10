export interface TeamMember {
	name: string;
	role: string;
	bio: string;
	experiences: string[];
	photo?: string;
	photoCrop: string;
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

export interface LightboxPhoto {
	image: string;
	alt: string;
	longDescription: string;
	label?: string;
}

export type RobotPhoto = Omit<LightboxPhoto, "label">;
