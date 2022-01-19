import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Redes } from '../model/Red';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedService {

  constructor(private http: HttpClient) { }

  Url='http://localhost:8080/red'

  getRed(){
    return this.http.get<Redes[]>(this.Url)
  }

  postRed(red: Redes): Observable<any>{
    return this.http.post<Redes>(this.Url,red)
  }

  deleteRed(id: number): Observable<object>{
    return this.http.delete(`${this.Url}/${id}`)
  }
  
}
