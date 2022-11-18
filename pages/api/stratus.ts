import { NextApiRequest, NextApiResponse } from "next";
import { Clouds } from "./cirrus";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Clouds[]>
) {
  res.status(200).json([
    {
      level: "low",
      class: "stratus",
      name: "Stratus",
      description:
        "Clouds in a continuous layer, or Stratus fractus: In ragged shreds, or both, without precipitation.",
      image: "https://www.weather.gov/images/jetstream/clouds/l6_1.jpg",
    },
    {
      level: "low",
      class: "stratus",
      name: "Stratus Fractus or Cumulus Fractus",
      description:
        "Stratus- or Cumulus- fractus: Ragged shreds during precipitation, usually seen below Altostratus or Nimbostratus.",
      image: "https://www.weather.gov/images/jetstream/clouds/l7_1.jpg",
    },
  ]);
}
