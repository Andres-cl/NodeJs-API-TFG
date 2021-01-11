"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lineasPlanSemanalController_1 = __importDefault(require("../controllers/lineasPlanSemanalController"));
class LineasPlanSemanalRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', lineasPlanSemanalController_1.default.list);
        this.router.post('/', lineasPlanSemanalController_1.default.create);
    }
}
const li = new LineasPlanSemanalRoutes();
exports.default = li.router;
