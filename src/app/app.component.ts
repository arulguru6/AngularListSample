import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name = "Angular4";
  day = new Date(1989,6,27);
  arr = [3,5,1,7,6,9];
  items = ["Angular4", "React", "Javascript"];
  newItem = "abc";
  pushItem = function() {    
    if(this.newItem !="")
      this.items.push(this.newItem);
    this.newItem="";
  }
  removeItem = function(index:number){
    this.items.splice(index,1);
    this.newItem = "working";
  }

}
