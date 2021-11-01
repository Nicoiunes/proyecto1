import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deportern',
  templateUrl: './deportern.page.html',
  styleUrls: ['./deportern.page.scss'],
})
export class DeporternPage implements OnInit {

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
