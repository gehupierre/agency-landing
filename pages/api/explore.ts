import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const exploreData = require("../../data/explore-places.json");

  res.status(200).json(exploreData)
}