import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListComponent } from './list/list.component';

@NgModule({
  //são os componentes ou pipes etc. que fazem parte desta pasta
  declarations: [
    HeroeComponent,
    ListComponent
  ],
  //coisas viziveis fora do módulo
  exports: [
    ListComponent
  ],
  //aqui vão todos os módulos
 imports: [
    CommonModule
  ],

})
export class HeroesModule {}
