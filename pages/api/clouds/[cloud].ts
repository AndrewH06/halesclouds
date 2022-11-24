import { NextApiRequest, NextApiResponse } from "next";
import { clouds } from "../../../utils/clouds";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cloud = req.query.cloud as "high" | "mid" | "low";
  const fetchedCloud = clouds[cloud];

  return res.status(200).json(fetchedCloud);
}
