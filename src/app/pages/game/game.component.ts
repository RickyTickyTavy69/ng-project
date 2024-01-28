import {Component, inject, OnInit} from '@angular/core';
import {TelegramService} from "../../services/telegram.service";
import {FlipCardModule} from "../../flip-card/flip-card.module";
import {TimerModule} from "../../components/timer/timer.module";

const cards = [
  {
    frontImage: "assets/cardImages/heart.png",
    frontImageComp: "assets/cardImages/heart_comp.png",
    type: 1,
    id: 0,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/hand.png",
    frontImageComp: "assets/cardImages/hand_comp.png",
    type: 2,
    id: 1,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/hand2.png",
    frontImageComp: "assets/cardImages/hand2_comp.png",
    type: 3,
    id: 2,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/heart.png",
    frontImageComp: "assets/cardImages/heart_comp.png",
    type: 1,
    id: 3,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/hand.png",
    frontImageComp: "assets/cardImages/hand_comp.png",
    type: 2,
    id: 4,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/hand2.png",
    frontImageComp: "assets/cardImages/hand2_comp.png",
    type: 3,
    id: 5,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/ball.png",
    frontImageComp: "assets/cardImages/ball_comp.png",
    type: 4,
    id: 6,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/ball.png",
    frontImageComp: "assets/cardImages/ball_comp.png",
    type: 4,
    id: 7,
    toggled: false,
    completed: false,
    blink: false,
  },

  {
    frontImage: "assets/cardImages/bengal.png",
    frontImageComp: "assets/cardImages/bengal_comp.png",
    type: 5,
    id: 8,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/bengal.png",
    frontImageComp: "assets/cardImages/bengal_comp.png",
    type: 5,
    id: 9,
    toggled: false,
    completed: false,
    blink: false,
  },

  {
    frontImage: "assets/cardImages/cartoon.png",
    frontImageComp: "assets/cardImages/cartoon_comp.png",
    type: 6,
    id: 10,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/cartoon.png",
    frontImageComp: "assets/cardImages/cartoon_comp.png",
    type: 6,
    id: 11,
    toggled: false,
    completed: false,
    blink: false,
  },

  {
    frontImage: "assets/cardImages/cornish.png",
    frontImageComp: "assets/cardImages/cornish_comp.png",
    type: 7,
    id: 12,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/cornish.png",
    frontImageComp: "assets/cardImages/cornish_comp.png",
    type: 7,
    id: 13,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/food.png",
    frontImageComp: "assets/cardImages/food_comp.png",
    type: 8,
    id: 14,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/food.png",
    frontImageComp: "assets/cardImages/food_comp.png",
    type: 8,
    id: 15,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/hands.png",
    frontImageComp: "assets/cardImages/hands_comp.png",
    type: 9,
    id: 16,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/hands.png",
    frontImageComp: "assets/cardImages/hands_comp.png",
    type: 9,
    id: 17,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/hands_new.png",
    frontImageComp: "assets/cardImages/hands_new_comp.png",
    type: 10,
    id: 18,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/hands_new.png",
    frontImageComp: "assets/cardImages/hands_new_comp.png",
    type: 10,
    id: 19,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/singapura.png",
    frontImageComp: "assets/cardImages/singapura_comp.png",
    type: 11,
    id: 20,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/singapura.png",
    frontImageComp: "assets/cardImages/singapura_comp.png",
    type: 11,
    id: 21,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/lovecats.png",
    frontImageComp: "assets/cardImages/lovecats_comp.png",
    type: 12,
    id: 22,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/lovecats.png",
    frontImageComp: "assets/cardImages/lovecats_comp.png",
    type: 12,
    id: 23,
    toggled: false,
    completed: false,
    blink: false,
  },
  {
    frontImage: "assets/cardImages/m_placeholder.png",
    frontImageComp: "assets/cardImages/m_placeholder.png",
    type: 13,
    id: 24,
    toggled: true,
    completed: true,
    blink: false,
    placeholder: true,
  }
]

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    FlipCardModule,
    TimerModule,
  ],
  templateUrl: "game.component.html"
})
export class GameComponent implements OnInit {
  telegram = inject(TelegramService);
  cards;
  cardsFlipped: any;
  cardsCompleted: any;
  timerStop: boolean;
  constructor() {
    this.telegram.MainButton.show();
    this.cards = cards;
    this.cardsFlipped = 0;
    this.cardsCompleted = 0;
    this.timerStop = false;
  }
  flippedCardId: number = -1;

  ngOnInit() {
    this.shuffleArray(this.cards);
  }

  shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  addFlippedCard(){
    this.cardsFlipped = this.cardsFlipped + 1;
  }
  unToggleAllCards(){
    this.cards.forEach((card, idx) => {
      if(card.toggled){
        card.toggled = false;
      }
    })
  }
  editCardsData(id: number){
    const findCard = cards.find((card) => card.id === id);
    findCard.toggled = !findCard.toggled;
  }
  setFlippedCardId(id: number){
    this.flippedCardId = id;
  }
  removeFlippedCard(){
    // this.cardsFlipped--;
  }
  onClickedCard(id: number){
    // console.log("clicked cardId", id);
    this.addFlippedCard();
    this.editCardsData(id)

    if(this.cardsFlipped === 2) {
      const toggledCards = this.cards.filter((card) => card.toggled);

      if(toggledCards[0].type === toggledCards[1].type){
          this.cards.forEach((card, idx) => {
            if(card === toggledCards[0] || card === toggledCards[1]){
              card.completed = true;
            }
          });
          this.cardsCompleted += 2;
          if(this.cardsCompleted === cards.length -1){
            this.timerStop = true;
          }
      } else {
        setTimeout(() => {
          this.cards.forEach((card, idx) => {
            if(card === toggledCards[0] || card === toggledCards[1]){
              card.blink = true;
            }
          });

          setTimeout(
            () => {
              this.cards.forEach((card, idx) => {
                if(card === toggledCards[0] || card === toggledCards[1]){
                  card.blink = false;
                }
              });
            }, 800)
        }, 1400)
      }


      setTimeout(() => {
        this.unToggleAllCards();
        this.cardsFlipped = 0;
      }, 1000)
    }
    this.setFlippedCardId(id);
  }
}
