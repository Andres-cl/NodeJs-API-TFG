"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tuppersController_1 = __importDefault(require("../controllers/tuppersController"));
class TuppersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tuppersController_1.default.list);
        this.router.get('/tupper/:id', tuppersController_1.default.getOne);
        this.router.get('/:id', tuppersController_1.default.listByCreator);
        this.router.post('/', tuppersController_1.default.create);
        this.router.delete('/:id', tuppersController_1.default.delete);
        this.router.put('/:id', tuppersController_1.default.update);
    }
}
const tuppersRoutes = new TuppersRoutes();
exports.default = tuppersRoutes.router;
