import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.css'
})
export class FlipCardComponent implements OnInit {
    toggleProperty = false;
    backImageUrl = ""
    @Input() frontImage: string;
    @Input() frontImageComp: string;
    @Input() type: number;
    @Input() cardsFlipped: any;
    @Input() addFlippedCard: () => void;
    @Input() removeFlippedCard: () => void;
    @Input() cardId: number;
    @Input() flippedCardId: number;
    @Input() setFlippedCardId: (id: number) => void;
    @Input() toggled: boolean;
    @Input() completed: boolean;
    @Input() blink: boolean;
    @Input() placeholder?: boolean;



    constructor() {
      this.backImageUrl = this.blink? "assets/cardImages/savannah_blink.png": "assets/cardImages/savannah.png";
    }

    ngOnInit() {

    }

    // output, im Component wo onClick passiert?
    @Output() cardClicked = new EventEmitter<void>();
    toggle(){
      console.log("cardId", this.cardId);
      if(this.flippedCardId !== this.cardId && this.cardsFlipped < 2 && !this.completed){
        console.log("toggle")
        this.cardClicked.emit();
        this.addFlippedCard();
        // console.log("flipped are", this.cardsFlipped);
        this.toggleProperty = !this.toggleProperty;
        // this.setFlippedCardId(this.cardId);
      }
    }
}
