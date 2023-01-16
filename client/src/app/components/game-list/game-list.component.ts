import { Component, OnInit, HostBinding } from '@angular/core';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  listGames: any = [];

  constructor(private gameService: GamesService) {}

  async ngOnInit() {
    await this.getList();
  }

  async getList() {
    const data = await this.gameService.getGames();
    data.subscribe(async (res: any) => {
      const code = res.code;
      const obj = res.object;
      if (code === 'SUCCESS') {
        this.listGames = obj;
      } else {
        console.log('NOT_FOUND');
      }
      console.log('LIST =>', this.listGames);
    });
  }

  async deleteGame(id: string) {
    const data = await this.gameService.deleteGame(id);
    data.subscribe(async (res: any) => {
      const code = res.code;
      if (code === 'SUCCESS') {
        console.log('JUEGO ELIMINADO');
        await this.getList();
      } else {
        console.log('NOT_FOUND');
      }
    });
  }
}
