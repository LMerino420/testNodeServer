import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '../models/game';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}
}

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get(`${this.API_URI}/games`);
  }

  getOneGame(id: string) {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  saveGame(game: Game) {
    return this.http.post(`${this.API_URI}/games/`, game);
  }

  updateGame(id: string | number, updatedGame: Game): Observable<Game> {
    return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
  }
}
