import { NextApiRequest, NextApiResponse } from "next";
import { Clouds } from "./cirrus";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Clouds[]>
) {
  res.status(200).json([
    {
      level: "high",
      class: "cirrostratus",
      name: "Cirrostratus",
      description:
        "Cirrostratus with or without Cirrus: Increasing in density and covering much of, but not the entire sky.",
      image: "https://www.weather.gov/images/jetstream/clouds/h6_1.jpg",
    },
    {
      level: "high",
      class: "cirrostratus",
      name: "Cirrostratus covering the whole sky",
      description:
        "Veil covering the whole sky, sometimes a halo around the sun or moon is present.",
      image: "https://www.weather.gov/images/jetstream/clouds/h7_4.jpg",
    },
    {
      level: "high",
      class: "cirrostratus",
      name: "Cirrostratus not invading or covering the sky",
      description:
        "Cirrostratus veil not covering the whole sky nor increasing in coverage.",
      image: "https://www.weather.gov/images/jetstream/clouds/h8_2.jpg",
    },
  ]);
}
