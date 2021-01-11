"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const direccionController_1 = __importDefault(require("../controllers/direccionController"));
class DireccionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', direccionController_1.default.getOne);
    }
}
const direccionRoutes = new DireccionRoutes();
exports.default = direccionRoutes.router;
