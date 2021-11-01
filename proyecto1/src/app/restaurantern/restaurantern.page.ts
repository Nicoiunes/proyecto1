import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurantern',
  templateUrl: './restaurantern.page.html',
  styleUrls: ['./restaurantern.page.scss'],
})
export class RestauranternPage implements OnInit {

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
