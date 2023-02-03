import NodeCache from 'node-cache';
import { Request, Response, NextFunction } from 'express';

export const cache = new NodeCache({ stdTTL: 15 });

export const verifyCache = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const q = (req.query as { q: string }).q!;
    if (cache.has(q)) {
      return res.status(200).json(cache.get(q));
    }
    return next();
  } catch (e) {
    console.log(e);
  }
};
