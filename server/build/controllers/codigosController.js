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
class PedidosController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const codigos = yield database_1.default.then((r) => r.query('SELECT * FROM codigosPromocionales WHERE id = ?', [id]));
            if (codigos.length > 0) {
                return res.json(codigos[0]);
            }
            res.status(404).json({ text: 'El codigo no existe' });
        });
    }
    getOneWithDiscount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const codigos = yield database_1.default.then((r) => r.query('SELECT * FROM codigosPromocionales WHERE descuento = ?', [id]));
            if (codigos.length > 0) {
                return res.json(codigos[0]);
            }
            res.status(404).json({ text: 'El codigo no existe' });
        });
    }
    getOneWithCode(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const codigos = yield database_1.default.then((r) => r.query('SELECT * FROM codigosPromocionales WHERE codigo = ?', [id]));
            if (codigos.length > 0) {
                return res.json(codigos[0]);
            }
            res.status(404).json({ text: 'El codigo no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => r.query('INSERT INTO codigosPromocionales set ?', [req.body]));
            res.json({ message: 'codigo guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('DELETE FROM codigosPromocionales WHERE id = ?', [id]));
            res.json({ message: 'El codigo ha sido eliminado' });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const codigos = yield database_1.default.then((r) => r.query('select * from codigosPromocionales'));
            if (codigos.length === 0)
                res.json({ message: 'No hay códigos promocionales' });
            else
                res.json(codigos);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('UPDATE codigosPromocionales set ? WHERE id = ?', [req.body, id]));
            res.json({ message: 'El codigo fue actualizado' });
        });
    }
}
const pedidosController = new PedidosController();
exports.default = pedidosController;
