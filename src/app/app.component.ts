import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TelegramService} from "./services/telegram.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="max-w-2xl mx-auto flex-col items-center justify-center">
      <div>
        <router-outlet/>
      </div>
    </div>


  `,
})
export class AppComponent {
  telegram = inject(TelegramService);
  constructor() {
    this.telegram.MainButton.show();
  }
}
