"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const platosController_1 = __importDefault(require("../controllers/platosController"));
class PlatosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', platosController_1.default.list);
        this.router.get('/:id', platosController_1.default.getOne);
        this.router.post('/', platosController_1.default.create);
        this.router.delete('/:id', platosController_1.default.delete);
        this.router.put('/:id', platosController_1.default.update);
        this.router.get('/tipoplato/:id', platosController_1.default.listTipos);
    }
}
const platosRoutes = new PlatosRoutes();
exports.default = platosRoutes.router;
