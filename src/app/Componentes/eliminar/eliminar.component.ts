import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Celular } from 'src/app/Entidad/Celular';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  constructor(private router:Router, private service:ServiceService){}
 
  ngOnInit(): void{
   this.buscar();
 
  }
  cel : Celular = new Celular(); 
 
  buscar(){
   let idCelular= localStorage.getItem('id');
   this.cel.idCelular = Number(idCelular);
   this.service.buscarCel(this.cel).subscribe(data=>{
     this.cel = data;
 
   });
 
  }
  EliminarCelukar(){
    this.service.eliminarCel(this.cel).subscribe(data=>{
      alert("Se elimino la marca:" + this.cel.marca)
      this.router.navigate(['lista']);
  
    });
  
   }

}
