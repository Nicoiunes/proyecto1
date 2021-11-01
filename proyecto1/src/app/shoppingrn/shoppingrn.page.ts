import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingrn',
  templateUrl: './shoppingrn.page.html',
  styleUrls: ['./shoppingrn.page.scss'],
})
export class ShoppingrnPage implements OnInit {

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
