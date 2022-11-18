import { NextApiRequest, NextApiResponse } from "next";
import { Clouds } from "./cirrus";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Clouds[]>
) {
  res.status(200).json([
    {
      level: "low",
      class: "cumulonimbus",
      name: "Cumulus (Cu) of moderate/strong development",
      description:
        "Clouds of very tall summits, which lack sharp outlines and are not anvil-shaped.",
      image: "https://www.weather.gov/images/jetstream/clouds/l3_4.jpg",
    },
  ]);
}
