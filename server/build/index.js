"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTACION DEL FRAMEWORK DE NODE
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// RUTAS
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
// CLASE PARA DECLARAR EL SERVIDOR
class Server {
    // METODO QUE SE EJECUTA AL INSTANCIAR LA CLASE
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    // CONFIGURACION DEL SERVIDOR
    config() {
        // configuracion del puerto
        this.app.set('port', process.env.PORT || 3000);
        // configuracion para observar las peticiones que se hacen al servidor
        this.app.use(morgan_1.default('dev'));
        // configuracion para solicitar los datos al servidor
        this.app.use(cors_1.default());
        // configuracion para permitir formatos json
        this.app.use(express_1.default.json());
        // configuracion para recibir dsde un formulario html
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    // DEFINIR RUTAS DEL SERVIDOR
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    // METODO PARA INICIALIZAR EL SERVIDOR
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('SERVIDOR CORRIENDO EN EL PUERTO [', this.app.get('port'), ']');
        });
    }
}
// ALMACENAR OBJETO EN UNA CONSTANTE
const server = new Server();
// EJECUTAR METODO ESPECIFICO DEL OBJETO
server.start();
