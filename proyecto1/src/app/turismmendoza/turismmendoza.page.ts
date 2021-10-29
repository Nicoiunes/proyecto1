import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turismmendoza',
  templateUrl: './turismmendoza.page.html',
  styleUrls: ['./turismmendoza.page.scss'],
})
export class TurismmendozaPage implements OnInit {

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
