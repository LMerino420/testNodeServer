// IMPORTACION DE MODULOS
import {Request, Response} from 'express';

// IMPORTACION DE LA CONEXION
import pool from '../database';

class GamesController {
	// OBTENER LISTA DE JUEGOS
	public async list(req: Request, res: Response): Promise<any> {
		const games = await pool.query('SELECT * FROM games');

		if (games.length > 0) {
			return res.json({
				code: 'SUCCESS',
				object: games,
			});
		}
		return res.status(404).json({
			code: 'NOT_FOUND',
		});
	}

	// OBTENER UN JUEGO ESPECIFICO
	public async getOne(req: Request, res: Response): Promise<any> {
		const {id} = req.params;
		const game = await pool.query('SELECT * FROM games WHERE id = ?', [id]);

		if (game.length > 0) {
			return res.json({
				code: 'SUCCESS',
				object: game[0],
			});
		}
		return res.status(404).json({
			code: 'NOT_FOUND',
		});
	}

	// INSERTAR UN NUEVO JUEGO
	public async create(req: Request, res: Response): Promise<void> {
		await pool.query('INSERT INTO games set ?', [req.body]);
		res.json({code: 'SUCCESS'});
	}

	// ACTUALIZAR UN JUEGO
	public async update(req: Request, res: Response): Promise<void> {
		const {id} = req.params;
		await pool.query('UPDATE games SET ? WHERE id = ?', [req.body, id]);
		res.json({code: 'SUCCESS'});
	}

	// ELIMINAR UN JUEGO
	public async delete(req: Request, res: Response): Promise<void> {
		const {id} = req.params;
		await pool.query('DELETE FROM games WHERE id = ?', [id]);
		res.json({code: 'SUCCESS'});
	}
}

export const gamesController = new GamesController();
