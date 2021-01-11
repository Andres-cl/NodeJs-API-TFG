"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const familiasController_1 = __importDefault(require("../controllers/familiasController"));
class FamiliasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', familiasController_1.default.list);
        this.router.get('/:id', familiasController_1.default.getOne);
        this.router.post('/', familiasController_1.default.create);
        this.router.delete('/:id', familiasController_1.default.delete);
        this.router.put('/:id', familiasController_1.default.update);
    }
}
const familiasRoutes = new FamiliasRoutes();
exports.default = familiasRoutes.router;
