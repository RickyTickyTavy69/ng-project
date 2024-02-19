import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
})
export class TimerComponent implements OnInit {
  seconds = 0;
  @Input() activated: boolean;
  ngOnInit(){
      setInterval(() => {
        if(this.activated){
          this.addSecond();
        }
      }, 1000);
  }
  addSecond(){
    this.seconds++;
  }
}
