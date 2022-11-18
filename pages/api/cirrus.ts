// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Clouds = {
  level: string;
  class: string;
  name: string;
  description: string;
  image: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Clouds[]>
) {
  res.status(200).json([
    {
      level: "high",
      class: "cirrus",
      name: "Filaments of Cirrus",
      description:
        "Cirrus in straight, nearly straight, or curved filaments, strands or hooks.",
      image: "https://www.weather.gov/images/jetstream/clouds/h1_1.jpg",
    },
    {
      level: "high",
      class: "cirrus",
      name: "Dense Cirrus",
      description: " Dense cirrus of white puffs with wispy edges.",
      image: "https://www.weather.gov/images/jetstream/clouds/h2_3.jpg",
    },
    {
      level: "high",
      class: "cirrus",
      name: "Cirrus progressively invading the sky",
      description:
        "Cirrus filaments, strands or hooks, increasing in coverage and generally thickening as a whole.",
      image: "https://www.weather.gov/images/jetstream/clouds/h4_1.jpg",
    },
  ]);
}
