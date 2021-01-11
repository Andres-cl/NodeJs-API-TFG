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
class TuppersController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tuppers = yield database_1.default.then((r) => r.query('select * from tuppers'));
            res.json(tuppers);
        });
    }
    listByCreator(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const tuppers = yield database_1.default.then((r) => r.query('SELECT * FROM tuppers WHERE creador = ? order by id desc', [id]));
            if (tuppers.length > 0) {
                return res.json(tuppers[0]);
            }
            else {
                res.status(404).json({ text: 'El tupper no existe' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tupper = yield database_1.default.then((r) => r.query('INSERT INTO tuppers set ?', [req.body]));
            res.json({ message: 'tupper guardado', tupper });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('DELETE FROM tuppers WHERE id = ?', [id]));
            res.json({ message: 'El tupper ha sido eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.then((r) => r.query('UPDATE tuppers set ? WHERE id = ?', [req.body, id]));
            res.json({ message: 'El tupper fue actualizado' });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const tupper = yield database_1.default.then((r) => r.query('SELECT * FROM tuppers WHERE id = ?', [id]));
            if (tupper.length > 0) {
                return res.json(tupper[0]);
            }
            res.status(404).json({ text: 'El tupper no existe' });
        });
    }
}
const tuppersController = new TuppersController();
exports.default = tuppersController;
