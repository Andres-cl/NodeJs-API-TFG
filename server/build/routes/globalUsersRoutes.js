"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globalUsersController_1 = __importDefault(require("../controllers/globalUsersController"));
const express_1 = require("express");
class GlobalUsersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', globalUsersController_1.default.getOne);
        this.router.post('/', globalUsersController_1.default.create);
        this.router.delete('/:id', globalUsersController_1.default.delete);
        this.router.get('/:user/:pass', globalUsersController_1.default.login);
        this.router.get('/', globalUsersController_1.default.list);
        this.router.put('/:id', globalUsersController_1.default.update);
    }
}
const globalUsers = new GlobalUsersRoutes();
exports.default = globalUsers.router;
