import {Component, OnDestroy, OnInit, signal} from '@angular/core';
import {TelegramService} from "../../services/telegram.service";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit, OnDestroy{
  name = signal('');
  email = signal('');
  message = signal('');

  constructor(private telegram: TelegramService) {
    this.sendData = this.sendData.bind(this);
  }

  ngOnInit(): void {
    this.telegram.MainButton.setText("Отправить сообщение");
    this.telegram.MainButton.show();
    this.telegram.MainButton.onClick(this.sendData)
  }

  handleChange($event: any) {
    console.log($event.target.id)
    // this.name.set($event.target.value)
    this[$event.target.id].set($event.target.value);
  }

  private sendData() {
    console.log("data", this.name, this.email, this.message);
    // this.telegram.sendData({name: this.name, email: this.email, message: this.message})
    this.telegram.sendData({name: "artem", email: "artem@bakirov.info", message: "hello from angular"})
  }

  ngOnDestroy(): void {
    this.telegram.MainButton.offClick(this.sendData)
  }
}
