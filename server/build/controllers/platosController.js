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
class PlatosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const platos = yield database_1.default.then((r) => r.query('select * from platos'));
            res.json(platos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const platos = yield database_1.default.then((r) => r.query('SELECT * FROM platos WHERE id = ?', [id]));
            if (platos.length > 0) {
                return res.json(platos[0]);
            }
            res.status(404).json({ text: 'El plato no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => r.query('INSERT INTO platos set ?', [req.body]));
            res.json({ message: 'plato guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('DELETE FROM platos WHERE id = ?', [id]));
            res.json({ message: 'El plato ha sido eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('UPDATE platos set ? WHERE id = ?', [req.body, id]));
            res.json({ message: 'El plato fue actualizado' });
        });
    }
    listTipos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const platos = yield database_1.default.then((r) => r.query('select * from platos where tipoplato = ?', [id]));
            if (platos.length > 0) {
                return res.json(platos);
            }
            else {
                res.status(404).json({ text: 'No hay platos en dicha categoria' });
            }
        });
    }
}
const platosController = new PlatosController();
exports.default = platosController;
