import { Component, OnInit } from '@angular/core';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public nombre :any;
  public nacimiento :any;
  public direccion :any;
  public telefono :any;
  public mail :any;
  public contrasena :any;
  
  public datos:any= [];

  constructor(private registroService: RegistroService) { }

  ngOnInit() {

  }
Enviar(){
  this.datos.push(this.nombre)
  this.datos.push(this.nacimiento)
  this.datos.push(this.direccion)
  this.datos.push(this.telefono)
  this.datos.push(this.mail)
  this.datos.push(this.contrasena)
  this.registroService.registrarse(this.datos).subscribe((d)=>{
    alert("Usuario creado");
  })

}

}

