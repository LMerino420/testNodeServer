"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTACION DE MODULOS
const promise_mysql_1 = __importDefault(require("promise-mysql"));
// IMPORTACION DE CREDENCIALES
const keys_1 = __importDefault(require("./keys"));
// CREACION DE CONEXION
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
pool.getConnection().then((con) => {
    // INICIALIZA LA CONEXION
    pool.releaseConnection(con);
    console.log('DB CONNECTED');
});
// EXPORTAR LA CONEXION
exports.default = pool;
