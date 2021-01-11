"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const planSemanalController_1 = __importDefault(require("../controllers/planSemanalController"));
const express_1 = require("express");
class PlanSemanalRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', planSemanalController_1.default.getOne);
        this.router.post('/', planSemanalController_1.default.create);
        //this.router.put('/:id', planSemanalController.update);
        this.router.delete('/:id', planSemanalController_1.default.delete);
    }
}
const planSemanal = new PlanSemanalRoutes();
exports.default = planSemanal.router;
