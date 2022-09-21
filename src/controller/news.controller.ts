import {Request, Response} from 'express'
import { getQueryNews } from '../infra/data'
import { cache } from '../middlewares/verify-cache.middleware'


export default class NewsController {
  public static news = async(req: Request, res: Response) => {
    try {
      const { q }: any = req.query;
      console.log(req.query)
      cache.set(q, await getQueryNews(req.query.q, req.query.in, req.query.language))
      res.send(await getQueryNews(req.query.q, req.query.in, req.query.lang))
    } catch (e:any) {
      console.log(e.response)
    }
  }
}