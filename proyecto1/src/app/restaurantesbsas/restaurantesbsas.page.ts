import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurantesbsas',
  templateUrl: './restaurantesbsas.page.html',
  styleUrls: ['./restaurantesbsas.page.scss'],
})
export class RestaurantesbsasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  option = {
    slidesPerView: 1.5,
    centerSlides: true, 
    loop: true,
    spaceBetween: 10,
    autoplay: true,

  }


}
