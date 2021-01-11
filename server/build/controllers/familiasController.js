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
class FamiliasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const platos = yield database_1.default.then((r) => r.query('select * from familia'));
            res.json(platos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const familias = yield database_1.default.then((r) => r.query('SELECT * FROM familia WHERE id = ?', [id]));
            if (familias.length > 0) {
                return res.json(familias[0]);
            }
            res.status(404).json({ text: 'La familia no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => r.query('INSERT INTO familia set ?', [req.body]));
            res.json({ message: 'familia guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('DELETE FROM familia WHERE id = ?', [id]));
            res.json({ message: 'La familia ha sido eliminada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('UPDATE familia set ? WHERE id = ?', [req.body, id]));
            res.json({ message: 'La familia ha sido actualizada' });
        });
    }
}
const familiasController = new FamiliasController();
exports.default = familiasController;
