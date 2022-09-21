import NodeCache from 'node-cache'
import {Request, Response, NextFunction} from 'express'


export const cache = new NodeCache({stdTTL: 15})

export const verifyCache = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { q }: any = req.query;
    if (cache.has(q)) {
      return res.status(200).json(cache.get(q));
    }
    return next();
  } catch (e:any) {
    throw new Error(e);
  }
};
