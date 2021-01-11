"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tuppersalimentosController_1 = __importDefault(require("../controllers/tuppersalimentosController"));
class TuppersalimentosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', tuppersalimentosController_1.default.list);
        this.router.post('/', tuppersalimentosController_1.default.create);
    }
}
const tuppersalimentosRoutes = new TuppersalimentosRoutes();
exports.default = tuppersalimentosRoutes.router;
