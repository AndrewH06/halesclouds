import Link from "next/link";
import { FC } from "react";
import AllClouds from "./AllClouds";

const CloudLayout: FC = () => {
  const levels: Array<string> = ["high", "mid", "low"];
  const clouds: { [key: string]: Array<string> } = {
    high: ["cirrus", "cirrostratus", "cirrocumulus"],
    mid: ["altocumulus", "altostratus", "nimbostratus"],
    low: ["cumulus", "cumulonimbus", "status"],
  };
  return (
    <div className="flex flex-col gap-8">
      {levels.map((level: string) => {
        return (
          <div className="flex flex-col gap-4 px-12 py-8">
            <h4 className="mx-auto capitalize text-2xl">{level} Level</h4>
            <AllClouds clouds={clouds[level]} />
          </div>
        );
      })}
    </div>
  );
};

export default CloudLayout;
