import { Component } from '@angular/core';
import { Fruta } from './frutas/fruta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial';

  variavel: string;

  lista: Fruta[] = [{ nome: 'xuxu', preco: 3 }, { nome: 'ananas', preco: 5 }];

  clicado(evento) {
    console.log('teste', evento);
  }

  recebido(fruta: Fruta) {
    console.log('recebi a fruta ', fruta.nome);
  }
}
