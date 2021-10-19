import { stringify } from "@angular/compiler/src/util";
import { Component } from "@angular/core";

@Component({
    selector: 'listado-component',
    templateUrl: './heroe.component.html'
})

export class ListadoComponent{
  title = 'Listado';
  heroes:string[] = [' IronMan', ' CAmerica', ' Hulk', ' Thor'];
}