export type SiteConfig = typeof siteConfig;
export type GitProject = typeof gitProject;

export const siteConfig = {
	name: "Harakles",
	description: "Herakles' portfolio site.",
	logo:"https://i.pravatar.cc/150?u=a042581f4e29026704d",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/harakles",
		instagram: "https://instagram.com/mustafa.cetin7645?igshid=NThobDEwdmZiNmV1",
		discord: "https://discord.gg/9b6yyZKmH4",
		linkedIn:"https://www.linkedin.com/in/mustafa-%C3%A7etin-335078252/",
	},
	author:{
		name: "Harakles",
		level: "jr. full stack web developer",
		message:"Welcome To My Website. I'm Junior Web Developer Based In Balıkesir",
	},
};

export const gitProject = [
	{
		name:"My Portfolio",
		img:"",
	},
	{
		name:"",
		img:"",
	},
	{
		name:"",
		img:"",
	},

]
