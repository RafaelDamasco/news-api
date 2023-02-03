"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsRouter = void 0;
const express_1 = require("express");
const news_controller_1 = require("../controller/news.controller");
const verify_cache_middleware_1 = require("../middlewares/verify-cache.middleware");
exports.NewsRouter = (0, express_1.Router)();
exports.NewsRouter.get('/', news_controller_1.getNews);
exports.NewsRouter.get('/search', verify_cache_middleware_1.verifyCache, news_controller_1.searchNews);
