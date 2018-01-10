import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  lugares:any = [
    {id: 1, nombre: 'Floreria la gardenia', active: true, cercania: 1, distancia: 30, plan: 'pagado', descripcion: 'descripción 1'},
    {id: 2, nombre: 'Donas la pasadita', active: false, cercania: 2, distancia: 60, plan: 'gratuito', descripcion: 'descripción 2'},
    {id: 3, nombre: 'Veterinaria huellitas felices', active: true, cercania: 2, distancia: 60, plan: 'pagado', descripcion: 'descripción 3'},
    {id: 4, nombre: 'Floreria la gardenia2', active: true, cercania: 3, distancia: 90, plan: 'gratuito', descripcion: 'descripción 4'},
    {id: 5, nombre: 'Donas la pasadita2', active: false, cercania: 1, distancia: 30, plan: 'pagado', descripcion: 'descripción 5'},
    {id: 6, nombre: 'Veterinaria huellitas felices2', active: true, cercania: 2, distancia: 60, plan: 'pagado', descripcion: 'descripcion 6'},
  ];
  id = null;
  lugar:any = {};
  constructor(private route: ActivatedRoute){
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action2']);
    console.log(this.route.snapshot.queryParams['refer']);
    this.id = this.route.snapshot.params['id'];
    console.log(this.buscarLugar());
    this.lugar = this.buscarLugar();
  }

  buscarLugar(){
    return this.lugares.filter((lugar)=>{
      return lugar.id == this.id
    })[0] || null;
  }
}