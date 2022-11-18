import { NextApiRequest, NextApiResponse } from "next";
import { Clouds } from "./cirrus";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Clouds[]>
) {
  res.status(200).json([
    {
      level: "mid",
      class: "altocumulus",
      name: "Semi-transparent Altocumulus",
      description:
        "Translucent bands or patches in a relatively continuous layer.",
      image: "https://www.weather.gov/images/jetstream/clouds/m3_1.jpg",
    },
    {
      level: "mid",
      class: "altocumulus",
      name: "Altocumulus (Ac) progressively invading the sky",
      description: "One or more layers of translucent or opaque bands.",
      image: "https://www.weather.gov/images/jetstream/clouds/m5_2.jpg",
    },
    {
      level: "mid",
      class: "altocumulus",
      name: "Altocumulus in Layers or Altocumulus with As or Ns",
      description:
        "In one or more opaque layers, sometimes with Altostratus or Nimbostratus.",
      image: "https://www.weather.gov/images/jetstream/clouds/m7_2.jpg",
    },
    {
      level: "mid",
      class: "altocumulus",
      name: "Altocumulus with tufts or sproutings",
      description:
        "Small towers, which can be similar to small Cumulus with wispy trails of virga.",
      image: "https://www.weather.gov/images/jetstream/clouds/m8_6.jpg",
    },
    {
      level: "mid",
      class: "altocumulus",
      name: "Altocumulus of a chaotic sky",
      description:
        "Chaotic sky with multiple layers and kinds of Altocumulus at several altitudes.",
      image: "https://www.weather.gov/images/jetstream/clouds/m9_3.jpg",
    },
  ]);
}
