import { Injectable } from '@angular/core';

export interface ICard{
  image: string;
  open(): void;
  isOpen: boolean;
  isCompleted: boolean;
  setComplete(): void;
  type: number;
}

export const Cards: ICard[] = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/8467/8467005.png",
    isCompleted: false,
    isOpen: false,
    open() {},
    type: 1,
    setComplete() {}
  }
]

@Injectable({
  providedIn: 'root'
})
export class GameService {
  cards: ICard[] = Cards;
  constructor() { }
}


