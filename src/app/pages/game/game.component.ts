import {Component, inject} from '@angular/core';
import {TelegramService} from "../../services/telegram.service";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  template: `<ng-container>
    <div class="text-red-600">
      This is the game
    </div>
  </ng-container>`
})
export class GameComponent {
  telegram = inject(TelegramService);
  constructor() {
    this.telegram.MainButton.show();
  }
}
