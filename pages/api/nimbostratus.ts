import { NextApiRequest, NextApiResponse } from "next";
import { Clouds } from "./cirrus";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Clouds[]>
) {
  res.status(200).json([
    {
      level: "mid",
      class: "nimbostratus",
      name: "Nimbostratus or Thick Altostratus",
      description:
        "Thick opaque coverage, no precipitation, or Nimbostratus: during precipitation or virga.",
      image: "https://www.weather.gov/images/jetstream/clouds/m2_3.jpg",
    },
  ]);
}
