import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Celular } from 'src/app/Entidad/Celular';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService){}
  cel !: Celular[];

  ngOnInit(): void {
      this.lista();
  }
  lista(){
    this.service.listaCel().subscribe(data=>{
      this.cel = data;
      
    })
  }

  editarC(cel : Celular){
    localStorage.setItem("id",cel.idCelular.toString());
    this.router.navigate(["editar"]);
  }

  eliminarC(cel : Celular){
    localStorage.setItem("id",cel.idCelular.toString());
    this.router.navigate(["eliminar"]);
  }

}
