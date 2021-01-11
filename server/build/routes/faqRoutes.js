"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const faqController_1 = __importDefault(require("../controllers/faqController"));
class FaqRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', faqController_1.default.list);
        this.router.get('/:id', faqController_1.default.getOne);
        this.router.post('/', faqController_1.default.create);
        this.router.delete('/:id', faqController_1.default.delete);
        this.router.put('/:id', faqController_1.default.update);
    }
}
const faqRoutes = new FaqRoutes();
exports.default = faqRoutes.router;
