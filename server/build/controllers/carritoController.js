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
class CarritoController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const carrito = yield database_1.default.then((r) => r.query('SELECT * FROM pedidos WHERE usuarioid = ?', [id]));
            if (carrito.length > 0) {
                return res.json(carrito[0]);
            }
            else {
                return res.status(404).json({ text: 'El usuario no tiene carrito' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => r.query('INSERT INTO carrito set ?', [req.body]));
            res.json({ message: 'carrito guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('DELETE FROM carrito WHERE usuarioid = ?', [id]));
            res.json({ message: 'El carrito ha sido eliminado' });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pedidos = yield database_1.default.then((r) => r.query('select * from carrito', [id]));
            if (pedidos.length === 0)
                res.json({ message: 'No hay carritos' });
            else
                res.json(pedidos);
        });
    }
}
const carritoController = new CarritoController();
exports.default = carritoController;
