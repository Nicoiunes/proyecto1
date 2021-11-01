import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcordoba',
  templateUrl: './shoppingcordoba.page.html',
  styleUrls: ['./shoppingcordoba.page.scss'],
})
export class ShoppingcordobaPage implements OnInit {

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
