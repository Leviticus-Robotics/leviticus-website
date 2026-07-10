import type { Sponsor, TeamMember } from "../types/content";

export const teamMembers: TeamMember[] = [
	{
		name: "Andrew Wong",
		role: "Hardware + Software",
		bio: "Works across hardware and software, contributing to robot design, fabrication, and controls.",
		experiences: ["Programming", "Computer-aided design"],
		photo: "/members/andrew.png",
		photoCrop: "50% 28%",
	},
	{
		name: "Matthew Chang",
		role: "Software",
		bio: "Builds autonomous routines, driver tools, and the feedback loops that make the robot reliable.",
		experiences: ["Java controls", "Computer vision experiments"],
		photo: "/members/matthew.jpg",
		photoCrop: "50% 22%",
	},
	{
		name: "Noah Kim",
		role: "Hardware",
		bio: "Develops and assembles robot mechanisms with a focus on reliable competition hardware.",
		experiences: ["Mechanical design", "Robot assembly"],
		photo: "/members/noah.png",
		photoCrop: "50% 24%",
	},
	{
		name: "Daniel Yang",
		role: "Outreach",
		bio: "Connects the team with schools, sponsors, and local organizations through demos and storytelling.",
		experiences: ["Sponsor relations", "STEM event planning"],
		photo: "/members/daniel.jpg",
		photoCrop: "72% 22%",
	},
	{
		name: "Ryan Liu",
		role: "Team Member",
		bio: "Contributes to team projects and helps prepare the robot for testing and competition.",
		experiences: ["Robot testing", "Competition preparation"],
		photo: "/members/ryan.png",
		photoCrop: "50% 28%",
	},
	{
		name: "Benjamin Wong",
		role: "Team Member",
		bio: "Supports the team's build process and helps turn prototypes into competition-ready mechanisms.",
		experiences: ["Prototyping", "Robot assembly"],
		photo: "/members/ben.png",
		photoCrop: "50% 10%",
	},
];

export const sponsors: Sponsor[] = [
];
