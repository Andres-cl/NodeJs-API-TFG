"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PlanSemanalController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const plan = yield database_1.default.then((r) => r.query('SELECT * FROM planSemanal WHERE id = ?', [id]));
            if (plan.length > 0) {
                return res.json(plan[0]);
            }
            else {
                return res.status(404).json({ text: 'Plan Semanal inexistente' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const plan = yield database_1.default.then((r) => r.query('INSERT INTO planSemanal set ?', [req.body]));
            res.json({ message: 'plan semanal guardado', plan });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('DELETE FROM planSemanal WHERE id = ?', [id]));
            res.json({ message: 'El plan semanal ha sido borrado' });
        });
    }
}
const planSemanalController = new PlanSemanalController();
exports.default = planSemanalController;
