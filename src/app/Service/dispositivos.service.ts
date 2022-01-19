import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Dispositivos } from '../model/Dispositivo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispositivosService {

  constructor(private http: HttpClient) { }

  Url='http://localhost:8080/dispositivos'

  getDispositivo(){
    return this.http.get<Dispositivos[]>(this.Url)
  }

  postDispositivo(json: Dispositivos): Observable<object>{
    return this.http.post(this.Url,json)
  }

  deleteDispositivo(id: number): Observable<object>{
    return this.http.delete(this.Url+"/"+id)
  }

  getdispositivoId(id: number){
    return this.http.get<Dispositivos>(this.Url+"/"+id)
  }

  updateDispositivo(dispositivo: Dispositivos){
    return this.http.put<Dispositivos>(this.Url+"/"+dispositivo.id, dispositivo)
  }

}