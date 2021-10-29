import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deportemendoza',
  templateUrl: './deportemendoza.page.html',
  styleUrls: ['./deportemendoza.page.scss'],
})
export class DeportemendozaPage implements OnInit {

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
