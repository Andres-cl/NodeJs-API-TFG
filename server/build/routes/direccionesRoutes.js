"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const direccionesController_1 = __importDefault(require("../controllers/direccionesController"));
class DireccionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', direccionesController_1.default.list);
        this.router.get('/direccion/:id', direccionesController_1.default.getOne);
        this.router.post('/', direccionesController_1.default.create);
        this.router.delete('/:id', direccionesController_1.default.delete);
        this.router.put('/:id', direccionesController_1.default.update);
    }
}
const direccionesRoutes = new DireccionesRoutes();
exports.default = direccionesRoutes.router;
