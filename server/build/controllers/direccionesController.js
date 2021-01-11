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
class DireccionesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const direcciones = yield database_1.default.then((r) => r.query('select * from direcciones where usuarioid = ?', [id]));
            if (direcciones.length === 0)
                res.json({ message: 'No tiene direcciones ese usuario' });
            else
                res.json(direcciones);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => r.query('INSERT INTO direcciones set ?', [req.body]));
            res.json({ message: 'direccion guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('DELETE FROM direcciones WHERE id = ?', [id]));
            res.json({ message: 'La direccion ha sido eliminada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('UPDATE direcciones set ? WHERE id = ?', [req.body, id]));
            res.json({ message: 'Direccion actualizada' });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const direccion = yield database_1.default.then((r) => r.query('select * from direcciones WHERE id = ?', [id]));
            if (direccion.length === 0)
                res.json({ message: 'No Existe la direccion buscada' });
            else
                res.json(direccion);
        });
    }
}
const direccionesController = new DireccionesController();
exports.default = direccionesController;
