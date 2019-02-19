import { Injectable } from '@angular/core';
import { Fruta } from './fruta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrutasService {
  constructor(private httpClient: HttpClient) {}

  public getFrutas(): Observable<Fruta[]> {
    return this.httpClient.get('/frutas') as Observable<Fruta[]>;
  }

  public postFruta(fruta: Fruta): Observable<Object> {
    return this.httpClient.post('/frutas', fruta);
  }
}
