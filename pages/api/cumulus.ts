import { NextApiRequest, NextApiResponse } from "next";
import { Clouds } from "./cirrus";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Clouds[]>
) {
  res.status(200).json([
    {
      level: "low",
      class: "cumulus",
      name: "Cumulus (Cu) with little vertical extent",
      description:
        "Thin and ragged clouds with continuously changing edges; forms during fair weather by daytime heating.",
      image: "https://www.weather.gov/images/jetstream/clouds/l1_5.jpg",
    },
    {
      level: "low",
      class: "cumulus",
      name: "Cumulus (Cu) of moderate/strong development",
      description:
        "Moderately tall clouds with rounded puffy tops; may occur with Cumulus/Stratocumulus (L4)",
      image: "https://www.weather.gov/images/jetstream/clouds/l2_4.jpg",
    },
  ]);
}
