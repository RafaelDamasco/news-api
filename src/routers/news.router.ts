import axios from 'axios';
import { Router } from 'express';
import { getNews, searchNews } from '../controller/news.controller';
import { verifyCache } from '../middlewares/verify-cache.middleware';

export const NewsRouter = Router();

NewsRouter.get('/', getNews);

NewsRouter.get('/search', verifyCache, searchNews);
