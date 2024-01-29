import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {ButtonComponent} from "../../components/button/button.component";

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  template: `<div>
    Results:
    <ul>
      <li>RickyTickyTavy: 1.06</li>
    </ul>
  </div>
  <div>
    <app-button title="Play the game" [routerLink]="'/game'"/>
  </div>
  `
})
export class ResultsComponent {

}
