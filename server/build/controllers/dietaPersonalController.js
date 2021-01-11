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
class DietaPersonalController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.then((r) => r.query('SELECT * FROM dietaPersonal WHERE id = ?', [id]));
            if (games.length > 0) {
                return res.json(games[0]);
            }
            else {
                return res.status(404).json({ text: 'Dieta Personal inexistente' });
            }
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const planes = yield database_1.default.then((r) => r.query('select * from dietaPersonal'));
            res.json(planes);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const dieta = yield database_1.default.then((r) => r.query('INSERT INTO dietaPersonal set ?', [req.body]));
            res.json({ message: 'usuario guardado', dieta });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('DELETE FROM dietaPersonal WHERE id = ?', [id]));
            res.json({ message: 'La dieta ha sido eliminada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('UPDATE dietaPersonal set ? WHERE id = ?', [req.body, id]));
            res.json({ message: 'Dieta actualizada' });
        });
    }
}
const dietaPersonalController = new DietaPersonalController();
exports.default = dietaPersonalController;
