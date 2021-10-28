import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deportebsas',
  templateUrl: './deportebsas.page.html',
  styleUrls: ['./deportebsas.page.scss'],
})
export class DeportebsasPage implements OnInit {

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
