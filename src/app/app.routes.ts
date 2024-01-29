import { Routes } from '@angular/router';

import {GameComponent} from "./pages/game/game.component";
import {ResultsComponent} from "./pages/results/results.component";


export const routes: Routes = [
      {
        path: 'game',
        component: GameComponent,
        pathMatch: "full",
      },
      {
        path: '',
        component: ResultsComponent,
        pathMatch: "full",
      }
];
