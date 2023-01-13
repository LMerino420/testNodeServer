// IMPORTACION DE MODULOS
import {Router} from 'express';

// IMPORTACION DE CONTROLADORES
import {gamesController} from '../controller/gamesController';

class GamesRoutes {
	// DEFINIENDO ENRUTADOR
	public router: Router = Router();

	// METODO QUE SE EJECUTA AL INSTANCIAR LA CLASE
	constructor() {
		this.config();
	}

	// DEFINICION DE RUTAS
	config(): void {
		this.router.get('/', gamesController.list);
		this.router.get('/:id', gamesController.getOne);
		this.router.post('/', gamesController.create);
		this.router.put('/:id', gamesController.update);
		this.router.delete('/:id', gamesController.delete);
	}
}

// INSTANCIANDO CLASE
const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;
