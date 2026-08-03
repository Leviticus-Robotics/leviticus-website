import type { Sponsor, TeamMember } from "../types/content";
import fabworksLogo from "../assets/sponsors/fabworks.svg";

export const teamMembers: TeamMember[] = [
	{
		name: "Andrew Wong",
		role: "Hardware + Software",
		bio: "Andrew is a rising senior who enjoys working on robots in any way, whether through the hardware or software team. This is his 4th year in FTC and he hopes to apply math and physics to solve this year's challenge. Outside of robotics, Andrew enjoys playing tennis and chess.",
		experiences: [/*"Programming", "Computer-aided design"*/],
		photo: "/src/assets/members/andrew.png",
		photoCrop: "50% 28%",
	},
	{
		name: "Matthew Chang",
		role: "Software",
		bio: "I'm a senior going to the The King's Academy. I enjoy programming robots and the often cumbersome process of debugging until midknight.... More importantly, I like dogs and birds but hate coachroaches, avocadoes, and cucumbers.",
		experiences: [/*"Java controls", "Computer vision experiments"*/],
		photo: "/src/assets/members/matthew.jpg",
		photoCrop: "50% 22%",
	},
	{
		name: "Noah Kim",
		role: "Hardware",
		bio: "Develops and assembles robot mechanisms with a focus on reliable competition hardware.",
		experiences: [/*"Mechanical design", "Robot assembly"*/],
		photo: "/src/assets/members/noah.png",
		photoCrop: "50% 24%",
	},
	{
		name: "Daniel Yang",
		role: "Outreach",
		bio: "Daniel is a senior at The King's Academy. Daniel's love for robotics started in middle school where he experimented with Raspberry Pi, Arduino, and EV3 Mindstorms. In his free time, he codes, working on personal projects, contributing to libraries, and experimenting with reinforcement learning. On the software team, he hopes to contribute high quality code and learn from others.",
		experiences: [/*"Sponsor relations", "STEM event planning"*/],
		photo: "/src/assets/members/daniel.jpg",
		photoCrop: "72% 22%",
	},
	{
		name: "Ryan Liu",
		role: "Team Member",
		bio: "Contributes to team projects and helps prepare the robot for testing and competition.",
		experiences: [/*"Robot testing", "Competition preparation"*/],
		photo: "/src/assets/members/ryan.png",
		photoCrop: "50% 28%",
	},
	{
		name: "Benjamin Wong",
		role: "Team Member",
		bio: "Benjamin is a rising senior at The King’s Academy. He works on the team's mechanical design, CAD, and runs the team’s social media. Outside of robotics, he spends his free time building personal projects, playing blue on the piano, and running.",
		experiences: [/*"Prototyping", "Robot assembly"*/],
		photo: "/src/assets/members/ben.png",
		photoCrop: "50% 10%",
	},
	{
		name: "Katie Kim",
		role: "Intern",
		bio: "Learns alongside the team and supports projects while gaining hands-on robotics experience.",
		experiences: [/*"Robotics fundamentals", "Team projects"*/],
		photo: "/src/assets/members/katie.jpg",
		photoCrop: "50% 22%",
	},
];

export const sponsors: Sponsor[] = [
	{
		name: "Fabworks",
		url: "https://www.fabworks.com/",
		logo: fabworksLogo,
	},
];
