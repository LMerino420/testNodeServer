// IMPORTACION DE MODULOS
import {Router} from 'express';

// IMPORTACION DE CONTROLADORES
import {indexController} from '../controller/indexController';

class IndexRoutes {
	// DEFINIENDO ENRUTADOR
	public router: Router = Router();

	// METODO QUE SE EJECUTA AL INSTANCIAR LA CLASE
	constructor() {
		this.config();
	}

	// DEFINICION DE RUTAS
	config(): void {
		this.router.get('/', indexController.index);
	}
}

// INSTANCIANDO CLASE
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
