import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deportecordoba',
  templateUrl: './deportecordoba.page.html',
  styleUrls: ['./deportecordoba.page.scss'],
})
export class DeportecordobaPage implements OnInit {

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
