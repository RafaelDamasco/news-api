import {Request, Response} from 'express'
import { getNews, getQueryNews } from '../infra/data'
import { cache } from '../middlewares/verify-cache.middleware'


export default class NewsController {
  public static news = async(req: Request, res: Response) => {
    try {
      res.send(await getNews())
    } catch (e:any) {
      console.log(e.response)
    }
  }

  public static search = async(req: Request, res: Response) => {
    try {
      const { q }: any = req.query;
      cache.set(q, await getQueryNews(q, req.query.in, req.query.lang))
      res.send(await getQueryNews(req.query.q, req.query.in, req.query.lang))
    } catch (e:any) {
      console.log(e.response)
    }
  }
}