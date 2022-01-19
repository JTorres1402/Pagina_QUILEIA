import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedService } from '../Service/red.service';
import { Redes } from '../model/Red';

@Component({
  selector: 'app-list-red',
  templateUrl: './list-red.component.html',
  styleUrls: ['./list-red.component.css']
})
export class ListRedComponent implements OnInit {

  redes:Redes[]

  constructor(public service: RedService, private router: Router) { }

  ngOnInit() {
    this.service.getRed().subscribe(data =>{
      this.redes=data
    })
  }


  deleteRed(id: number){
    
    //window.location.reload()
   
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la red",
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
        this.service.deleteRed(id).subscribe(dato => {
  
        })
      }
    })

  }

}
