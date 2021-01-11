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
            const games = yield database_1.default.then((r) => r.query('SELECT * FROM pedidos WHERE ref_pedido = ?', [id]));
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: 'El pedido no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pedido = yield database_1.default.then((r) => r.query('INSERT INTO pedidos set ?', [req.body]));
            res.json({ message: 'pedido guardado', pedido });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('DELETE FROM pedidos WHERE id = ?', [id]));
            res.json({ message: 'El usuario ha sido eliminado' });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pedidos = yield database_1.default.then((r) => r.query('select * from pedidos where usuarioid = ?', [id]));
            if (pedidos.length === 0)
                res.json({ message: 'No tiene pedidos ese usuario' });
            else
                res.json(pedidos);
        });
    }
}
const pedidosController = new PedidosController();
exports.default = pedidosController;
