import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dispositivos } from '../model/Dispositivo';
import { DispositivosService } from '../Service/dispositivos.service';

@Component({
  selector: 'app-add-dispo',
  templateUrl: './add-dispo.component.html',
  styleUrls: ['./add-dispo.component.css']
})
export class AddDispoComponent implements OnInit {

  macdispositivo: string = ''
  estado='desconectado'
  dispositivo: string = ''


  dispositivos : Dispositivos = new Dispositivos()
  constructor(private router: Router, private service: DispositivosService) { }

  ngOnInit() {
  }

  post_dispositivo(){
    this.service.postDispositivo(this.dispositivos).subscribe(dato => {
      console.log(dato)
      this.router.navigate([''])
    },error => console.log(error))
    
  }

  add_dispositivo(){
    let json={
      "mac":this.dispositivos.mac,
      "estado":this.estado,
      "tipo":this.dispositivos.tipo
    }
    this.service.postDispositivo(this.dispositivos).subscribe(json => {
      console.log(json)
      this.router.navigate([''])
    },error => console.log(error))
    
    
    console.log(json)
  }


}
