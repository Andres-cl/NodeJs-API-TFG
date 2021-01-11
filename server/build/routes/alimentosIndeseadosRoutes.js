"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alimentosIndeseadosController_1 = __importDefault(require("../controllers/alimentosIndeseadosController"));
const express_1 = require("express");
class AlimentosIndeseadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', alimentosIndeseadosController_1.default.getOne);
        this.router.get('/dieta/:id', alimentosIndeseadosController_1.default.list);
        this.router.post('/', alimentosIndeseadosController_1.default.create);
        this.router.put('/:id', alimentosIndeseadosController_1.default.update);
        this.router.delete('/:id', alimentosIndeseadosController_1.default.delete);
    }
}
const alimentosIndeseados = new AlimentosIndeseadosRoutes();
exports.default = alimentosIndeseados.router;
