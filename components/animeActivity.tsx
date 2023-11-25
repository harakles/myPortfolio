import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";
import { CalcTime, getActivity } from "@/app/lib/actions";

export default async function AnimeActivity() {
  const data = await getActivity();
  data.activities = await data.activities.slice(0, 8);
  console.log(data.activities[0]);
  return (
    <div className="w-full my-4">
      <div className="w-full">
        <Card shadow="sm" className="w-full">
          <CardHeader className="justify-center">Last Activity</CardHeader>
          <CardBody className="overflow-visible p-0">
            <table>
              <tbody>
                {data.activities.map((activity) => (
                  <tr key={activity.id} className="border-y border-gray-800">
                    <td>
                      <Avatar
                        size="md"
                        radius="sm"
                        src={activity.media.coverImage.large}
                      />
                    </td>
                    <td>
                      {activity.status}{" "}
                      <span className="text-purple-700">
                        {activity.progress}
                      </span>{" "}
                      of{" "}
                      <p className="text-purple-700">
                        {activity.media.title.userPreferred}
                      </p>
                    </td>
                    <td className="text-xs align-text-top text-right">
                      {CalcTime(activity.createdAt)} 
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
