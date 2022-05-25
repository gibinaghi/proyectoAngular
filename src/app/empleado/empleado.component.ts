import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  //creo las propiedades

  nombre="Gimena";
  apellido="Binaghi";
  //private edad=22;
  edad=32;
  //empresa="Google";

  /*getEdad(){
    return this.edad;
  }*/

  llamaEmpresa(value:String){
    
  }

  //creo el property binding
  habilitacionCuadro=false;

  constructor() { }

  ngOnInit(): void {
  }

}
