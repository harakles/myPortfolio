import React from "react";
import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";
import { getStaticProps } from "@/app/lib/actions";
import repoImg from "@/public/Repository.png";

export default async function RecentProjects() {
  const repos = await getStaticProps();
  return (
    <div className="sm:w-1/2">
      <h1 className="text-center pb-5 text-large">My Recent Projects</h1>
    <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {repos.map(item => (
        <Link href={item.url} key={item.id} className="w-full">
        <Card shadow="sm" className="w-full">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="md"
              width="100%"
              alt={item.name}
              className="w-full object-fill"
              src="/Repository.png"
            />
          </CardBody>
          <CardFooter className="text-small justify-between ">
            <b>{item.name}</b>
            <p className="text-default-500">
            ⭐ {item.stargazerCount}
            </p>
          </CardFooter>
        </Card>
        </Link>
      ))} 
    </div>
    </div>
  );
}



