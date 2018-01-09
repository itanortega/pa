import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquere';
  lugares:any = [
    {nombre: 'Floreria la gardenia', active: true, cercania: 1, distancia: 30, plan: 'pagado'},
    {nombre: 'Donas la pasadita', active: false, cercania: 2, distancia: 60, plan: 'gratuito'},
    {nombre: 'Veterinaria huellitas felices', active: true, cercania: 2, distancia: 60, plan: 'pagado'},
    {nombre: 'Floreria la gardenia2', active: true, cercania: 3, distancia: 90, plan: 'gratuito'},
    {nombre: 'Donas la pasadita2', active: false, cercania: 1, distancia: 30, plan: 'pagado'},
    {nombre: 'Veterinaria huellitas felices2', active: true, cercania: 2, distancia: 60, plan: 'pagado'},
  ];
  lat:number = 1.2060377;
  lng:number = -77.2629534;

  constructor (){
    
  }
}
