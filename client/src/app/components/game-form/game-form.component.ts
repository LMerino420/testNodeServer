import { OnInit, Component, HostBinding } from '@angular/core';
import { Game } from '../../models/game';
import { Router, ActivatedRoute } from '@angular/router';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss'],
})
export class GameFormComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  game: Game = {
    id: 0,
    tittle: '',
    description: '',
    image: '',
    created_at: new Date(),
  };

  edit: boolean = false;

  constructor(
    private gameService: GamesService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      const data = await this.gameService.getOneGame(params['id']);
      data.subscribe(async (res: any) => {
        const code = res.code;
        const obj = res.object;
        if (code === 'SUCCESS') {
          console.log(obj);
          this.game = obj;
          this.edit = true;
        } else {
          console.log('NOT_FOUND');
        }
      });
    }
  }

  async saveGame() {
    delete this.game.id;
    delete this.game.created_at;
    const data = await this.gameService.saveGame(this.game);
    data.subscribe(async (res: any) => {
      const code = res.code;
      if (code === 'SUCCESS') {
        console.log('JUEGO GUARDADO =>', this.game.tittle);
        this.route.navigate(['/games']);
      } else {
        console.log('NO SE PUDO GUARDAR');
      }
    });
  }

  async updateGame() {
    const id = String(this.game.id);
    delete this.game.created_at;
    const data = await this.gameService.updateGame(id, this.game);
    data.subscribe(async (res: any) => {
      const code = res.code;
      if (code === 'SUCCESS') {
        console.log('SE ACTUALIZO');
        this.route.navigate(['/games']);
      } else {
        console.log('NO SE PUDO ACTUALIZAR');
      }
    });
    console.log('UPDATE', this.game);
  }
}
