import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turismrn',
  templateUrl: './turismrn.page.html',
  styleUrls: ['./turismrn.page.scss'],
})
export class TurismrnPage implements OnInit {

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
