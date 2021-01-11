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
class Lineas_carritoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const lineascarrito = yield database_1.default.then((r) => r.query('select * from lineas_carrito where usuarioid = ?', [id]));
            if (lineascarrito.length === 0)
                res.json({ message: 'No tiene lineas dicho carrito' });
            else
                res.json(lineascarrito);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const linea = yield database_1.default.then((r) => r.query('INSERT INTO lineas_carrito set ?', [req.body]));
            res.json({ message: 'Linea Guardada en el carrito', linea });
        });
    }
    deleteProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('DELETE FROM lineas_carrito WHERE id = ?', [id]));
            res.json({ message: 'la linea ha sido eliminada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const linea = yield database_1.default.then((r) => r.query('UPDATE lineas_carrito set ? WHERE id = ?', [req.body, id]));
            res.json({ message: 'La linea fue actualizada', linea });
        });
    }
    deleteLinesFromUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('DELETE FROM lineas_carrito WHERE usuarioid = ?', [id]));
            res.json({ message: 'las lineas han sido eliminadas' });
        });
    }
}
const lineaCarrito = new Lineas_carritoController();
exports.default = lineaCarrito;
