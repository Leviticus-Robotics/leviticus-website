import type { SvgComponent } from "astro/types";

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
	url: string;
	logo: SvgComponent;
	tier: Tier;
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
	thumbnail?: string;
	thumbnailSrcset?: string;
	thumbnailSizes?: string;
	alt: string;
	longDescription: string;
	label?: string;
}

export type RobotPhoto = Omit<
	LightboxPhoto,
	"thumbnail" | "thumbnailSrcset" | "thumbnailSizes" | "label"
>;

export enum Tier {
	Gold,
	Silver,
	Bronze,
}

export interface TierData {
	label: string;
	color: string;
	price: number;
	benefits: string[];
	desc: string;
}
