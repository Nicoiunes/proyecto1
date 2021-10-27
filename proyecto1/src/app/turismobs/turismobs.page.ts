import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turismobs',
  templateUrl: './turismobs.page.html',
  styleUrls: ['./turismobs.page.scss'],
})
export class TurismobsPage implements OnInit {

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
