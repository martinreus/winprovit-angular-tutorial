import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fruta } from './fruta';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent implements OnInit {
  @Input()
  frutas: Fruta[];
  @Output()
  frutaClicado: EventEmitter<Fruta> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  enviarFruta(fruta: Fruta) {
    this.frutaClicado.next(fruta);
  }
}
