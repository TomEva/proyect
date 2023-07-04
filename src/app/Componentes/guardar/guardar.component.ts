import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Celular } from 'src/app/Entidad/Celular';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {

  constructor(private router:Router, private service:ServiceService){}
  cel : Celular = new Celular(); 

  GuardarCelukar(){
    this.service.agregarCel(this.cel).subscribe(data=>{
      alert("se guardo el regustro" + this.cel.marca)
      this.router.navigate(['lista']);
    });
  }

}
