import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Fruta } from '../fruta';
import { FrutasService } from '../frutas.service';
import { Observable, Subscription, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent implements OnInit, OnDestroy {
  frutas: Observable<Fruta[]>;
  @Output()
  frutaClicado: EventEmitter<Fruta> = new EventEmitter();

  private destroy = new Subject();

  constructor(private service: FrutasService) {}

  ngOnInit() {
    this.frutas = this.service.getFrutas();

    this.service
      .getFrutas()
      .pipe(takeUntil(this.destroy))
      .subscribe(result => console.log(result));
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  enviarFruta(fruta: Fruta) {
    this.frutaClicado.next(fruta);
  }
}
