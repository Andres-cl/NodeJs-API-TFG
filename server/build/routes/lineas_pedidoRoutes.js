"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lineas_pedidoController_1 = __importDefault(require("../controllers/lineas_pedidoController"));
class Lineas_pedidoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', lineas_pedidoController_1.default.list);
        //this.router.get('/:id', lineas_pedidoController.getOne);
        this.router.post('/', lineas_pedidoController_1.default.create);
        //todo IMPLEMENTAR ESTO
        //this.router.delete('/:id', lineas_pedidoController.delete);
    }
}
const lineaspedido = new Lineas_pedidoRoutes();
exports.default = lineaspedido.router;
