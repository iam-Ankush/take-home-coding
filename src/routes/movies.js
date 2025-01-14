"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moviesServices_1 = require("../services/moviesServices");
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { year } = req.query;
    const { page = 1 } = req.query;
    if (!year) {
        return res.status(400).json({ message: 'Year is required.' });
    }
    try {
        const movies = yield (0, moviesServices_1.getMoviesByYear)(parseInt(year), parseInt(page));
        res.status(200).json(movies);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching movies.' });
    }
}));
exports.default = router;
