// IMPORTACION DE MODULOS
import {Request, Response} from 'express';

class IndexController {
	index(req: Request, res: Response) {
		// res.send('CONTROLLER [INDEX]');
		res.json({text: 'API => /api/games'});
	}
}

export const indexController = new IndexController();
