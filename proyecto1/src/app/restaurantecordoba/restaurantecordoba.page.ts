import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurantecordoba',
  templateUrl: './restaurantecordoba.page.html',
  styleUrls: ['./restaurantecordoba.page.scss'],
})
export class RestaurantecordobaPage implements OnInit {

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
