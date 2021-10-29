import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public usuario: any;
  public contra: any;

  constructor(private homeService:HomeService) {}

  comprobarlogin (){
    this.homeService.check(this.usuario,this.contra).subscribe (datos=> {
      console.log (datos);
    })
  } 


}
