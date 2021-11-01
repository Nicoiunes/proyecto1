import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingmendoza',
  templateUrl: './shoppingmendoza.page.html',
  styleUrls: ['./shoppingmendoza.page.scss'],
})
export class ShoppingmendozaPage implements OnInit {

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
