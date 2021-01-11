"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dietaPersonalController_1 = __importDefault(require("../controllers/dietaPersonalController"));
const express_1 = require("express");
class DietaPersonalRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', dietaPersonalController_1.default.getOne);
        this.router.get('/', dietaPersonalController_1.default.list);
        this.router.post('/', dietaPersonalController_1.default.create);
        this.router.put('/:id', dietaPersonalController_1.default.update);
        this.router.delete('/:id', dietaPersonalController_1.default.delete);
    }
}
const dietaPersonal = new DietaPersonalRoutes();
exports.default = dietaPersonal.router;
