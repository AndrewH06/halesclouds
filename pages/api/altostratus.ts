import { NextApiRequest, NextApiResponse } from "next";
import { Clouds } from "./cirrus";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Clouds[]>
) {
  res.status(200).json([
    {
      level: "mid",
      class: "altostratus",
      name: "Thin Altostratus",
      description:
        "Full or nearly full sky cover that is gray, shapeless and translucent; produces no halo.",
      image: "https://www.weather.gov/images/jetstream/clouds/m1_1.jpg",
    },
  ]);
}
