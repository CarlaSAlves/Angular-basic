import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',

})
export class ListComponent {

heroes:string [] = [ 'Ironman', 'Hulk', 'Thor', 'Capitan America']
heroeDeleted:string= '';

  deleteHeroe(){
    this.heroeDeleted = this.heroes.shift() || ' ';

  }

}
