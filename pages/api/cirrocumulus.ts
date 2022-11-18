import { NextApiRequest, NextApiResponse } from "next";
import { Clouds } from "./cirrus";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Clouds[]>
) {
  res.status(200).json([
    {
      level: "high",
      class: "Cirrocumulus",
      name: "Cirrocumulus",
      description:
        "Thin white ripples or small puffs, which may be accompanied by some Cirrus/Cirrostratus.",
      image: "https://www.weather.gov/images/jetstream/clouds/h9_1.jpg",
    },
  ]);
}
