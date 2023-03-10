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
exports.gamesController = void 0;
// IMPORTACION DE LA CONEXION
const database_1 = __importDefault(require("../database"));
class GamesController {
    // OBTENER LISTA DE JUEGOS
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM games');
            if (games.length > 0) {
                return res.json({
                    code: 'SUCCESS',
                    object: games,
                });
            }
            return res.status(404).json({
                code: 'NOT_FOUND',
            });
        });
    }
    // OBTENER UN JUEGO ESPECIFICO
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const game = yield database_1.default.query('SELECT * FROM games WHERE id = ?', [id]);
            if (game.length > 0) {
                return res.json({
                    code: 'SUCCESS',
                    object: game[0],
                });
            }
            return res.status(404).json({
                code: 'NOT_FOUND',
            });
        });
    }
    // INSERTAR UN NUEVO JUEGO
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO games set ?', [req.body]);
            res.json({ code: 'SUCCESS' });
        });
    }
    // ACTUALIZAR UN JUEGO
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE games SET ? WHERE id = ?', [req.body, id]);
            res.json({ code: 'SUCCESS' });
        });
    }
    // ELIMINAR UN JUEGO
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM games WHERE id = ?', [id]);
            res.json({ code: 'SUCCESS' });
        });
    }
}
exports.gamesController = new GamesController();
