import { Request, Response } from 'express';
import { news, search } from '../api';
import { cache } from '../middlewares/verify-cache.middleware';

export const getNews = async (req: Request, res: Response) => {
  res.send(await news());
};

export const searchNews = async (req: Request, res: Response) => {
  const q = (req.query as { q: string }).q!;
  const searcbInAttribute = (req.query as { in: string }).in;
  const lang = (req.query as { lang: string }).lang;
  const sortBy = (req.query as { sortby: string }).sortby;

  cache.set(q, await search(q, searcbInAttribute, lang, sortBy));
  res.send(await search(q, searcbInAttribute, lang, sortBy));
};
