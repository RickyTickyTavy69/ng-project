import { Routes } from '@angular/router';

import {GameComponent} from "./pages/game/game.component";
import {ResultsComponent} from "./pages/results/results.component";


export const routes: Routes = [
      {
        path: '',
        component: GameComponent,
        pathMatch: "full",
      },
      {
        path: 'result',
        component: ResultsComponent,
        pathMatch: "full",
      }
];
