import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  lugares:any = [
    {id: 1, nombre: 'Floreria la gardenia', active: true, cercania: 1, distancia: 30, plan: 'pagado'},
    {id: 2, nombre: 'Donas la pasadita', active: false, cercania: 2, distancia: 60, plan: 'gratuito'},
    {id: 3, nombre: 'Veterinaria huellitas felices', active: true, cercania: 2, distancia: 60, plan: 'pagado'},
    {id: 4, nombre: 'Floreria la gardenia2', active: true, cercania: 3, distancia: 90, plan: 'gratuito'},
    {id: 5, nombre: 'Donas la pasadita2', active: false, cercania: 1, distancia: 30, plan: 'pagado'},
    {id: 6, nombre: 'Veterinaria huellitas felices2', active: true, cercania: 2, distancia: 60, plan: 'pagado'},
  ];
  lat:number = 1.2060377;
  lng:number = -77.2629534;

  constructor (){
    
  }
}