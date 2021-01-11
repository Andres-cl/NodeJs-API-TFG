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
class GlobalUsersController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tuppers = yield database_1.default.then((r) => r.query('select * from globalUsers'));
            res.json(tuppers);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.then((r) => r.query('SELECT * FROM globalUsers WHERE id = ?', [id]));
            if (games.length > 0) {
                return res.json(games[0]);
            }
            else {
                return res.status(404).json({ text: 'El usuario no existe' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('UPDATE globalUsers set ? WHERE id = ?', [req.body, id]));
            res.json({ message: 'usuario actualizado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.default.then((r) => r.query('INSERT INTO globalUsers set ?', [req.body]));
            res.json({ message: 'usuario guardado', user });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('DELETE FROM globalUsers WHERE id = ?', [id]));
            res.json({ message: 'El usuario ha sido eliminado' });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user } = req.params;
            const { pass } = req.params;
            const usuario = yield database_1.default.then((r) => r.query('select * from globalUsers where usuario = ? and password = ?', [user, pass]));
            if (usuario.length > 0) {
                return res.json(usuario[0]);
            }
            else {
                return res.status(404).json({ text: 'El usuario no existe' });
            }
        });
    }
}
const globalUsuariosController = new GlobalUsersController();
exports.default = globalUsuariosController;
