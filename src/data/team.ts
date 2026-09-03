import { Tier, type Sponsor, type TeamMember, type TierData } from "../types/content";
import fabworksLogo from "../assets/sponsors/fabworks.svg";

export const teamMembers: TeamMember[] = [
	{
		name: "Andrew Wong",
		role: "Hardware + Software",
		bio: "Andrew is a senior who enjoys working on robots in any way, whether through the hardware or software team. This is his 4th year in FTC and he hopes to apply math and physics to solve this year's challenge. Outside of robotics, Andrew enjoys playing tennis and chess.",
		experiences: [/*"Programming", "Computer-aided design"*/],
		photo: "/src/assets/members_official/andrew.jpeg",
		photoCrop: "50% 28%",
	},
	{
		name: "Matthew Chang",
		role: "Software",
		bio: "I'm a senior going to the The King's Academy. I enjoy programming robots and the often cumbersome process of debugging until midknight.... More importantly, I like dogs and birds but hate coachroaches, avocadoes, and cucumbers.",
		experiences: [/*"Java controls", "Computer vision experiments"*/],
		photo: "/src/assets/members_official/matthew.jpeg",
		photoCrop: "50% 22%",
	},
	{
		name: "Noah Kim",
		role: "Hardware",
		bio: "Noah is a senior in The King’s Academy with 3 previous years of FTC experience. He is a part of the mechanical team but also enjoys building sponsor relations. During his freetime, Noah loves playing tennis, fishing, and working out.",
		experiences: [/*"Mechanical design", "Robot assembly"*/],
		photo: "/src/assets/members_official/noah.jpeg",
		photoCrop: "50% 24%",
	},
	{
		name: "Daniel Yang",
		role: "Software",
		bio: "Daniel is a senior at The King's Academy. Daniel's love for robotics started in middle school where he experimented with Raspberry Pi, Arduino, and EV3 Mindstorms. In his free time, he codes, working on personal projects, contributing to libraries, and experimenting with reinforcement learning. On the software team, he hopes to contribute high quality code and learn from others.",
		experiences: [/*"Sponsor relations", "STEM event planning"*/],
		photo: "/src/assets/members_official/daniel.jpeg",
		photoCrop: "72% 22%",
	},
	{
		name: "Ryan Liu",
		role: "Software",
		bio: "I got started in robotics via our school's robotics team. Through that, I learned many valuable skills, including communication, vision detection, as well as general software development practices. Due to reasons unrelated to the school team, I decided to join this team.",
		experiences: [/*"Robot testing", "Competition preparation"*/],
		photo: "/src/assets/members_official/ryan.jpeg",
		photoCrop: "50% 28%",
	},
	{
		name: "Benjamin Wong",
		role: "Hardware",
		bio: "Benjamin is a senior at The King’s Academy. He works on the team's mechanical design, CAD, and runs the team’s social media. Outside of robotics, he spends his free time building personal projects, playing blue on the piano, and running.",
		experiences: [/*"Prototyping", "Robot assembly"*/],
		photo: "/src/assets/members_official/ben.jpeg",
		photoCrop: "50% 10%",
	},
	{
		name: "Pax",
		role: "Business",
		bio: "Pax is a senior at The King's Academy, and this is his first time being on the Business team of an FTC team. He enjoys finding ways to think about problems from different perspectives. In his free time, Pax likes to play tennis, do toy photography, and fish.",
		experiences: [],
		photo: "/src/assets/members_official/pax.jpeg",
		photoCrop: "50% 28%",
	},
	{
		name: "Katie Kim",
		role: "Intern",
		bio: "Katie is an 8th grade student going to Live Oak Academy. This is her first year competing with FTC and she will be learning the basics of engineering alongside helping out with aesthetic designs and team apparel. During her freetime, she enjoys listening to k-pop and reading.",
		experiences: [/*"Robotics fundamentals", "Team projects"*/],
		photo: "/src/assets/members_official/katie.jpeg",
		photoCrop: "50% 22%",
	},
];

export const sponsors: Sponsor[] = [
	{
		name: "Fabworks",
		url: "https://www.fabworks.com/",
		logo: fabworksLogo,
		tier: Tier.None,
	},
];

export const tierData: Record<Tier, TierData> = {
	[Tier.None]: {
		label: "Our Sponsors",
		color: "#000000",
		price: 0,
		benefits: [
			"Support the team"
		],
		desc: "",
	},
	[Tier.Bronze]: {
		label: "Bronze",
		color: "#cd7f32",
		price: 500,
		benefits: [
			"Name/logo on our website",
			"Instagram post"
		],
		desc: "",
	},
	[Tier.Silver]: {
		label: "Silver",
		color: "#c0c0c0",
		price: 1000,
		benefits: [
			"All Bronze benifits",
			"Name/logo on our portfolio",
			"Small logo on our uniform",
		],
		desc: "",
	},
	[Tier.Gold]: {
		label: "Gold",
		color: "#d4af37",
		price: 2000,
		benefits: [
			"All Silver Benefits",
			"Logo on our robot",
			"Big logo on our uniform",
			"Shoutout out at competitions",
		],
		desc: "",
	},
};
