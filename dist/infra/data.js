"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = exports.news = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const token = process.env.API_TOKEN || '';
const news = async () => {
    const { data } = await axios_1.default.get(`https://gnews.io/api/v4/top-headlines`, {
        params: { token },
    });
    return data;
};
exports.news = news;
const search = async (query, searchIn, language) => {
    const { data } = await axios_1.default.get(`https://gnews.io/api/v4/search`, {
        params: { token, q: query, in: searchIn, lang: language },
    });
    return data;
};
exports.search = search;
