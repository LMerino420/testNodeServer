"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTACION DE MODULOS
const express_1 = require("express");
// IMPORTACION DE CONTROLADORES
const indexController_1 = require("../controller/indexController");
class IndexRoutes {
    // METODO QUE SE EJECUTA AL INSTANCIAR LA CLASE
    constructor() {
        // DEFINIENDO ENRUTADOR
        this.router = express_1.Router();
        this.config();
    }
    // DEFINICION DE RUTAS
    config() {
        this.router.get('/', indexController_1.indexController.index);
    }
}
// INSTANCIANDO CLASE
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
