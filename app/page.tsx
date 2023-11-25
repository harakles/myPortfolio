import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Metadata } from 'next';
import { AboutMeCard } from "@/components/aboutme";
import RecentProjects from "@/components/recentProjects";
import AnimeActivity from "@/components/animeActivity";



export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
	return (
		<section className="sm:flex sm:items-start sm:justify-evenly sm:space-y-0 gap-4 py-4 md:py-5 row-auto space-y-4">
			<div>
			<AboutMeCard/>
			<AnimeActivity/>
			</div>
      		<RecentProjects/>
		</section>
	);
}
