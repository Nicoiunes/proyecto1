import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shppingbsas',
  templateUrl: './shppingbsas.page.html',
  styleUrls: ['./shppingbsas.page.scss'],
})
export class ShppingbsasPage implements OnInit {

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
