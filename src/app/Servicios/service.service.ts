import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Celular } from '../Entidad/Celular';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:7500/api/Celulares/'

  listaCel() {
    return this.http.get<Celular[]>(this.url + 'lista');

  }
  buscarCel(cel: Celular) {
    return this.http.post<Celular>(this.url + 'busca', cel);

  }
  agregarCel(cel: Celular) {
    return this.http.post<Celular>(this.url + 'guardar', cel);

  }
  esitarCel(cel: Celular) {
    return this.http.post<Celular>(this.url + 'editar', cel);

  }
  eliminarCel(cel: Celular) {
    return this.http.post<Celular>(this.url + 'elimiar', cel);

  }
}
