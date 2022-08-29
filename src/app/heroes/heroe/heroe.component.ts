import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'

})

export class HeroeComponent {
  name: string = 'Ironman';
  age: number = 45;

getName(): string{
return ` ${this.name} - ${this.age} `
}

get nameToUpperCase(){
  return this.name.toLowerCase();
}

changeName(){
  this.name = 'Spiderman';
}

  changeAge() {
    this.age = 23;
  }

}
