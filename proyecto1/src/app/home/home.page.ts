import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public usuario: any;
  public contra: any;

  constructor(private homeService:HomeService, private router: Router) {}

  comprobarlogin (){
    this.homeService.check(this.usuario,this.contra).subscribe (datos=> {
      console.log (datos);
      if(datos["length"]==0){
        alert ("Datos invalidos")
      }
      else{
        this.router.navigate(['/inicio'])
      }
    })
  } 


}
