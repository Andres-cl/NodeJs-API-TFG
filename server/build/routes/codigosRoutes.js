"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const codigosController_1 = __importDefault(require("../controllers/codigosController"));
class CodigosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', codigosController_1.default.list);
        this.router.get('/:id', codigosController_1.default.getOne);
        this.router.get('/descuento/:id', codigosController_1.default.getOneWithDiscount);
        this.router.get('/codigo/:id', codigosController_1.default.getOneWithCode);
        this.router.post('/', codigosController_1.default.create);
        this.router.delete('/:id', codigosController_1.default.delete);
        this.router.put('/:id', codigosController_1.default.update);
    }
}
const codigos = new CodigosRoutes();
exports.default = codigos.router;
