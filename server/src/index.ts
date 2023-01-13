// IMPORTACION DEL FRAMEWORK DE NODE
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// RUTAS
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

// CLASE PARA DECLARAR EL SERVIDOR
class Server {
	public app;

	// METODO QUE SE EJECUTA AL INSTANCIAR LA CLASE
	constructor() {
		this.app = express();
		this.config();
		this.routes();
	}

	// CONFIGURACION DEL SERVIDOR
	config(): void {
		// configuracion del puerto
		this.app.set('port', process.env.PORT || 3000);
		// configuracion para observar las peticiones que se hacen al servidor
		this.app.use(morgan('dev'));
		// configuracion para solicitar los datos al servidor
		this.app.use(cors());
		// configuracion para permitir formatos json
		this.app.use(express.json());
		// configuracion para recibir dsde un formulario html
		this.app.use(express.urlencoded({extended: false}));
	}

	// DEFINIR RUTAS DEL SERVIDOR
	routes(): void {
		this.app.use('/', indexRoutes);
		this.app.use('/api/games', gamesRoutes);
	}

	// METODO PARA INICIALIZAR EL SERVIDOR
	start(): void {
		this.app.listen(this.app.get('port'), () => {
			console.log(
				'SERVIDOR CORRIENDO EN EL PUERTO [',
				this.app.get('port'),
				']'
			);
		});
	}
}

// ALMACENAR OBJETO EN UNA CONSTANTE
const server = new Server();
// EJECUTAR METODO ESPECIFICO DEL OBJETO
server.start();
