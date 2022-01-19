import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { Redes } from '../model/Red';
import { RedService } from '../Service/red.service';

@Component({
  selector: 'app-add-red',
  templateUrl: './add-red.component.html',
  styleUrls: ['./add-red.component.css']
})
export class AddRedComponent implements OnInit {

  listared = ['Wifi','LAN'];
  listacifrado =['WEP','WPA','WPA2']
 
  red : Redes = new Redes()

  constructor(private router: Router, private service: RedService) { }

  ngOnInit(): void {
  }

  post_red(){
    this.service.postRed(this.red).subscribe(dato => {
      console.log(dato)
      this.router.navigate(['/list-red'])
    },error => console.log(error))
    
  }

  add_red(){
    this.post_red()
  }

}
