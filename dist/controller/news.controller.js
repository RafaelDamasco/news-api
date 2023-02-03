"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchNews = exports.getNews = void 0;
const api_1 = require("../api");
const verify_cache_middleware_1 = require("../middlewares/verify-cache.middleware");
const getNews = async (req, res) => {
    res.send(await (0, api_1.news)());
};
exports.getNews = getNews;
const searchNews = async (req, res) => {
    const q = req.query.q;
    const searcbInAttribute = req.query.in;
    const lang = req.query.lang;
    verify_cache_middleware_1.cache.set(q, await (0, api_1.search)(q, searcbInAttribute, lang));
    res.send(await (0, api_1.search)(q, searcbInAttribute, lang));
};
exports.searchNews = searchNews;
