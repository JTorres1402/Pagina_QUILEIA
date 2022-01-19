import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DispositivosService } from '../Service/dispositivos.service';
import { RedService } from '../Service/red.service';
import { Dispositivos } from '../model/Dispositivo';
import { Dispositivo } from '../model/Dispositivo';
import { Redes } from '../model/Red';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    
  conexion = ''
  dispositivos: Dispositivos[]
  dispositivo: Dispositivo = new Dispositivo()
  redes:Redes[]
  constructor(public service: DispositivosService, public servi: RedService, private router: Router) { }

  ngOnInit() {
    this.getDispositivo()
  }

  getDispositivo(){
    this.service.getDispositivo().subscribe(data =>{
      this.dispositivos=data
    })
    this.servi.getRed().subscribe(data =>{
      this.redes=data
    })
  }
  

  displayStyle = "none"
  model="none"
  
  enviar(){
    this.displayStyle = "none"
    window.location.reload()
    this.service.postDispositivo(this.dispositivo).subscribe(dato => {
      console.log(dato)
      this.router.navigate([''])
    },error => console.log(error))
  }

  actualizar(){

  }

  openPopup(id: number) {
    this.service.getdispositivoId(id).subscribe(data =>{
      this.dispositivo = data
    })
    this.displayStyle = "block"
  }
  closePopup() {
    this.displayStyle = "none"
    this.model = 'none'
  }

  openModel(id: number){
    this.service.getdispositivoId(id).subscribe(data =>{
      this.dispositivo = data
    })
    this.model = "block"
  }



  desconectar(){
    
  }

  deleteDispositivo(id: number){
   // window.location.reload()
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el dispositivo",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '3085d6',
      cancelButtonColor: 'd33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        swal(
          'Empleado eliminado',
          'El empleado ha sido eliminado con exito',
          'success'
        )
        window.location.reload()
        this.service.deleteDispositivo(id).subscribe(dato => {
          
        })
      }
    })
  }


}
