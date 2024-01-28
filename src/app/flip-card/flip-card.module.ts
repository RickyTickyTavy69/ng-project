import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FlipCardComponent} from "./flip-card.component";
import {FlipCardBackComponent} from "./flip-card-back";
import {FlipCardFrontComponent} from "./flip-card-front";



@NgModule({
  declarations: [FlipCardComponent, FlipCardBackComponent, FlipCardFrontComponent],
    imports: [
        CommonModule,
        NgOptimizedImage
    ],
  exports: [FlipCardComponent, FlipCardFrontComponent, FlipCardBackComponent],
})
export class FlipCardModule { }
