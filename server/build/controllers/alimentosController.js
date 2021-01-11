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
class AlimentosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const alimentos = yield database_1.default.then((r) => r.query('select * from alimentos'));
            res.json(alimentos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const alimentos = yield database_1.default.then((r) => r.query('SELECT * FROM alimentos WHERE id = ?', [id]));
            if (alimentos.length > 0) {
                return res.json(alimentos[0]);
            }
            else {
                res.status(404).json({ text: 'El alimento no existe' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => r.query('INSERT INTO alimentos set ?', [req.body]));
            res.json({ message: 'alimento guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('DELETE FROM alimentos WHERE id = ?', [id]));
            res.json({ message: 'El alimento ha sido eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('UPDATE alimentos set ? WHERE id = ?', [req.body, id]));
            res.json({ message: 'El alimento fue actualizado' });
        });
    }
    getCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const alimentos = yield database_1.default.then((r) => r.query('select * from alimentos where tipoalimento = ?', [id]));
            if (alimentos.length > 0) {
                return res.json(alimentos);
            }
            else {
                return res.status(404).json({ text: 'El alimento no existe' });
            }
        });
    }
    getNombre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const alimentos = yield database_1.default.then((r) => r.query('SELECT * FROM alimentos WHERE nombre = ?', [id]));
            if (alimentos.length > 0) {
                return res.json(alimentos[0]);
            }
            else {
                res.status(404).json({ text: 'El alimento no existe' });
            }
        });
    }
}
const alimentosController = new AlimentosController();
exports.default = alimentosController;
