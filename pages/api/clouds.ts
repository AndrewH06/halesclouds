import { NextApiRequest, NextApiResponse } from "next";
import { clouds } from "../../utils/clouds";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(clouds);
}
