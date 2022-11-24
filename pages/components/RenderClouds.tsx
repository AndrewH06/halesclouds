import Link from "next/link";
import { FC } from "react";
import ImageCarousel from "./ImageCarousel";

export type CloudsType = {
  [key: string]: {
    images: Array<string>;
    description: string;
    formation: string;
    indicates: string;
    precipitation: number;
    rarity: number;
  };
};

const RenderClouds = ({ clouds }: { clouds: CloudsType }): JSX.Element => {
  if (!clouds) return <div>Error</div>;

  return (
    <div className="w-full flex flex-wrap justify-center gap-8">
      {Object.entries(clouds).map((cloud, index) => {
        return (
          <div key={index} className="flex flex-col gap-1">
            <div className="h-[300px]">
              <ImageCarousel images={cloud[1].images} cloud={cloud[0]} />
            </div>
            <div className="flex flex-col items-right gap-1">
              <div className="flex justify-between items-center">
                <h3
                  className={`capitalize text-2xl font-semibold text-gray-800`}>
                  {cloud[0]}
                </h3>
                <RarityTag rarity={cloud[1].rarity} />
              </div>
            </div>
            <div className="w-[300px] text-gray-500">
              <p>{cloud[1].indicates}</p>
            </div>
            {/* <Link href="/" className="underline text-gray-700">
              Learn more
            </Link> */}
          </div>
        );
      })}
    </div>
  );
};

const RarityTag = ({ rarity }: { rarity: number }) => {
  const rarities: any = {
    0: {
      name: "very common",
      bg: "bg-green-100",
    },
    1: {
      name: "common",
      bg: "bg-green-300",
    },
    2: {
      name: "uncommon",
      bg: "bg-yellow-300",
    },
  };

  return (
    <div
      className={`text-sm rounded-md px-3 capitalize text-gray-700 ${rarities[rarity].bg}`}>
      <p className="tracking-wide">{rarities[rarity].name}</p>
    </div>
  );
};

export default RenderClouds;
