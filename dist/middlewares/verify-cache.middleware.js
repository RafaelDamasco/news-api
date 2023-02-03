"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCache = exports.cache = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
exports.cache = new node_cache_1.default({ stdTTL: 15 });
const verifyCache = (req, res, next) => {
    try {
        const q = req.query.q;
        if (exports.cache.has(q)) {
            return res.status(200).json(exports.cache.get(q));
        }
        return next();
    }
    catch (e) {
        console.log(e);
    }
};
exports.verifyCache = verifyCache;
