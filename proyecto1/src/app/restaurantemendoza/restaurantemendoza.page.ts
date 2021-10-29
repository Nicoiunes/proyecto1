import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurantemendoza',
  templateUrl: './restaurantemendoza.page.html',
  styleUrls: ['./restaurantemendoza.page.scss'],
})
export class RestaurantemendozaPage implements OnInit {

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
