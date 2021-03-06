import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FrutasService } from '../frutas.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-frutas-form',
  templateUrl: './frutas-form.component.html',
  styleUrls: ['./frutas-form.component.css']
})
export class FrutasFormComponent implements OnInit, OnDestroy {
  frutaForm: FormGroup;
  destroy = new Subject();

  bingo = false;
  constructor(private fb: FormBuilder, private service: FrutasService) {}

  ngOnInit() {
    this.frutaForm = this.fb.group({
      nome: ['', Validators.required],
      preco: [5, Validators.min(0)]
    });

    // value changes é um observable, ao qual podemos nos subscrever para receber mudanças no campo 'nome' do frutaForm.
    // importante também sempre fazer o takeUntil(this.destroy), pois temos um subscribe aqui.
    this.frutaForm.controls.nome.valueChanges.pipe(takeUntil(this.destroy)).subscribe(nome => {
      if (nome === 'bingo') {
        this.bingo = true;
      }
    });
  }

  gravar() {
    if (this.frutaForm.valid) {
      this.service
        .postFruta(this.frutaForm.value)
        // lembrar sempre do takeUntil
        .pipe(takeUntil(this.destroy))
        // tem que haver subscrição, senão a chamada ao backend não é realizada! (por causa do observable)
        .subscribe(result => console.log(result), error => console.log('erro do backend', error));
    }
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
