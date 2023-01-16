import { Component, HostBinding } from '@angular/core';
import { Game } from '../../models/game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss'],
})
export class GameFormComponent {
  @HostBinding('class') clases = 'row';

  game: Game = {
    id: 0,
    tittle: '',
    description: '',
    image: '',
    created_at: new Date(),
  };

  constructor(private gameService: GamesService) {}

  saveGame() {
    delete this.game.id;
    delete this.game.created_at;
    const data = this.gameService.saveGame(this.game);
    data.subscribe(async (res: any) => {
      const code = res.code;
      if (code == 'SUCCESS') {
        console.log('JUEGO GUARDADO =>', this.game.tittle);
      } else {
        console.log('NO SE PUDO GUARDAR');
      }
    });
  }
}
