"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lineas_carritoController_1 = __importDefault(require("../controllers/lineas_carritoController"));
class Lineas_carritoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', lineas_carritoController_1.default.list);
        //this.router.get('/:id', lineas_carritoController.getOne);
        this.router.post('/', lineas_carritoController_1.default.create);
        this.router.put('/:id', lineas_carritoController_1.default.update);
        this.router.delete('/:id', lineas_carritoController_1.default.deleteProducto);
        this.router.delete('/usuario/:id', lineas_carritoController_1.default.deleteLinesFromUser);
    }
}
const lineascarrito = new Lineas_carritoRoutes();
exports.default = lineascarrito.router;
