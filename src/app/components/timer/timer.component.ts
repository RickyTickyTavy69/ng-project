import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
})
export class TimerComponent implements OnInit {
  seconds = 0;
  @Input() timerStop: boolean;
  ngOnInit(){
      setInterval(() => {
        if(!this.timerStop){
          this.addSecond();
        }
      }, 1000);
  }
  addSecond(){
    this.seconds++;
  }
}
