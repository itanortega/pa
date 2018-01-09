import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquere';
  lugares:any = [
    {nombre: 'Floreria la gardenia', active: true},
    {nombre: 'Donas la pasadita', active: false},
    {nombre: 'Veterinaria huellitas felices', active: true}
  ]

  constructor (){
    
  }
}
