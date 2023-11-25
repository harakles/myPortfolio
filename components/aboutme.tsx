import { siteConfig } from "@/config/site";
import {Card, CardHeader, CardBody, CardFooter, Divider, Image,Link} from "@nextui-org/react";

export const AboutMeCard = ()=>{
    return (
    <Card className="max-w-[400px] flex">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={siteConfig.logo}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{siteConfig.author.name}</p>
          <p className="text-small text-default-500">{siteConfig.author.level}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{siteConfig.author.message}</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href={siteConfig.links.github}
        >
          Visit my Github Profile.
        </Link>
      </CardFooter>
    </Card>
)
}