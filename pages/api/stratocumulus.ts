import { NextApiRequest, NextApiResponse } from "next";
import { Clouds } from "./cirrus";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Clouds[]>
) {
  res.status(200).json([
    {
      level: "low",
      class: "Stratocumulus",
      name: "Stratocumulus (Sc) from spreading out of Cumulus (Cu)",
      description:
        "Spread out Cumulus when vertical development stabilizes; sometimes can occur along with Cumulus.",
      image: "https://www.weather.gov/images/jetstream/clouds/l4_2.jpg",
    },
    {
      level: "low",
      class: "Stratocumulus",
      name: "Stratocumulus (Sc) not from spreading out of Cumulus (Cu)",
      description: "One or more layers, not resulting from spreading Cumulus.",
      image: "https://www.weather.gov/images/jetstream/clouds/l5_1.jpg",
    },
  ]);
}
