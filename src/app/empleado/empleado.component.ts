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
  usuRegistrado = false;
  textoDeRegistro="No hay nadie registrado";


  getResgistrarUsuario() {
    this.usuRegistrado = false;
  }


  //función que realiza la acción del event
  setusuarioRegistrado(event:Event){
    //alert("El usuarios se ha registrado");
    
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar";
    } else {
      this.textoDeRegistro="No hay nadie registrado";
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
