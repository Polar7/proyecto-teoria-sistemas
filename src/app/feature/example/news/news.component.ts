import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  public boton1Evento(nombre: string, numeroX: number): void {
    alert("Su nombre es "+nombre+". Y su edad es "+numeroX);
  }

}
