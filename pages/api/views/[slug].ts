import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  return res.status(400).json({
    message: 'I am a robot. I am not allowed to do this.'
  });
}
