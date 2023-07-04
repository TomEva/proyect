import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Celular } from 'src/app/Entidad/Celular';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
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
 EditarCelukar(){
  this.service.esitarCel(this.cel).subscribe(data=>{
    alert("Se edito la marca:" + this.cel.marca)
    this.router.navigate(['lista']);

  });

 }

}


