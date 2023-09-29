import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBinding';
  drink : string="";
  price : string="3";
  size : string ="";
  constructor(){
    this.drink="Iced-Cofee";
    this.price="3.33$";
    this.size="Medium";
    this.getDetails();
  }
  getDetails():string{
    return "Your Order is:";
  }
}
