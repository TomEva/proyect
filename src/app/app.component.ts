import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudCelular';

  constructor(private router:Router){}

  lista(){
    this.router.navigate(['lista']);

  }

  guardar(){
    this.router.navigate(['guardar']);

  }
  editar(){
    this.router.navigate(['editar']);
  }


}
