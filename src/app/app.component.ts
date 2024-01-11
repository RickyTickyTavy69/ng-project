import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div>
      I am a cat play with me please!
    </div>
    <div>
      <router-outlet/>
    </div>

  `,
})
export class AppComponent {

}
