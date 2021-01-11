"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritoController_1 = __importDefault(require("../controllers/carritoController"));
class CarritoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', carritoController_1.default.list);
        this.router.get('/:id', carritoController_1.default.getOne);
        this.router.post('/', carritoController_1.default.create);
        this.router.delete('/:id', carritoController_1.default.delete);
    }
}
const carritoRoute = new CarritoRoutes();
exports.default = carritoRoute.router;
