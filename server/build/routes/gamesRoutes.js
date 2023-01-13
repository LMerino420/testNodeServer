"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTACION DE MODULOS
const express_1 = require("express");
// IMPORTACION DE CONTROLADORES
const gamesController_1 = require("../controller/gamesController");
class GamesRoutes {
    // METODO QUE SE EJECUTA AL INSTANCIAR LA CLASE
    constructor() {
        // DEFINIENDO ENRUTADOR
        this.router = express_1.Router();
        this.config();
    }
    // DEFINICION DE RUTAS
    config() {
        this.router.get('/', gamesController_1.gamesController.list);
        this.router.get('/:id', gamesController_1.gamesController.getOne);
        this.router.post('/', gamesController_1.gamesController.create);
        this.router.put('/:id', gamesController_1.gamesController.update);
        this.router.delete('/:id', gamesController_1.gamesController.delete);
    }
}
// INSTANCIANDO CLASE
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
