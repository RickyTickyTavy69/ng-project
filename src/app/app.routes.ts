import { Routes } from '@angular/router';

import {GameComponent} from "./pages/game/game.component";
import {ResultsComponent} from "./pages/results/results.component";
import {ContactComponent} from "./pages/contact/contact.component";


export const routes: Routes = [
      {
        path: '',
        component: GameComponent,
        pathMatch: "full",
      },
      {
        path: 'results',
        component: ResultsComponent,
        pathMatch: "full",
      },
      {
        path: "contact",
        component: ContactComponent,
        pathMatch: "full",
      }
];
