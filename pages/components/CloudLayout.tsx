import Link from "next/link";
import { FC } from "react";
import AllClouds from "./AllClouds";

type LevelTypes = "low" | "mid" | "high";

const CloudLayout: FC = () => {
  const levels: Array<LevelTypes> = ["high", "mid", "low"];
  return (
    <div className="flex flex-col">
      {levels.map((level: LevelTypes, index: number) => {
        return (
          <div key={index} className="flex flex-col gap-4 px-12 py-2">
            <h4 className="mx-auto capitalize text-2xl">{level} Level</h4>
            <AllClouds level={level} />
          </div>
        );
      })}
    </div>
  );
};

export default CloudLayout;
