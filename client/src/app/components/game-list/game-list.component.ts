import { Component, OnInit } from '@angular/core';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  listGames: any = [];

  constructor(private gameService: GamesService) {}

  async ngOnInit() {
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
}
