import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { FC } from "react";

type PropTypes = "low" | "mid" | "high";

interface CloudType {
  level: string;
  class: string;
  name: string;
  image: string;
  description: string;
}

const AllClouds = ({ level }: { level: PropTypes }): JSX.Element => {
  const { data, status, isLoading, isError } = useQuery(
    ["clouds"],
    async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/clouds`
      );
      return response.data;
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const { low, mid, high } = data.reduce(
    (acc: { [key: string]: CloudType[] }, data: CloudType) => {
      acc[data.level].push(data);
      return acc;
    },
    { mid: [], high: [], low: [] }
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        {level == "low" && low && <RenderClouds clouds={low} />}
        {level == "mid" && mid && <RenderClouds clouds={mid} />}
        {level == "high" && high && <RenderClouds clouds={high} />}
      </div>
    </div>
  );
};

const RenderClouds = ({ clouds }: { clouds: CloudType[] }): JSX.Element => {
  console.log(clouds);
  return (
    <div className="flex gap-2 flex-wrap">
      {clouds.map((cloud: CloudType, index: number) => {
        return (
          <div key={index} className="flex flex-col">
            <Image
              alt={cloud.name}
              src={cloud.image}
              width={150}
              height={150}
            />
            <p className="max-w-[150px] text-gray-500">{cloud.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllClouds;
