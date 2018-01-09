import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquere';
  listo = false;
  nombre:string = '';

  constructor (){
    setTimeout(() => {
      this.listo = true;
    },3000)
  }

  hacerAlgo(){
    alert('hacer algo');
  }
}
