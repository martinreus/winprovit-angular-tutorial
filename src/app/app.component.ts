import { Component, OnInit, OnDestroy } from '@angular/core';
import { Fruta } from './frutas/fruta';
import { FrutasService } from './frutas/frutas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AppComponent';

  variavel: string;

  constructor() {}

  ngOnInit(): void {}

  clicado(evento) {
    console.log('teste', evento);
  }

  recebido(fruta: Fruta) {
    console.log('recebi a fruta ', fruta.nome);
  }
}
