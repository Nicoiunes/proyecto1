import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turismcordoba',
  templateUrl: './turismcordoba.page.html',
  styleUrls: ['./turismcordoba.page.scss'],
})
export class TurismcordobaPage implements OnInit {

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
