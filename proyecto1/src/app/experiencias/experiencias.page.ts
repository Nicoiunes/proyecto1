import { Component, OnInit } from '@angular/core';
import { experienciasService } from './experiencias.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.page.html',
  styleUrls: ['./experiencias.page.scss'],
})
export class ExperienciasPage implements OnInit {

  constructor(private experienciasService: experienciasService) {}

public fotos

  ngOnInit(){
    this.experienciasService.getData().subscribe(data =>{
      console.log(data);

this.fotos=data
    })
  }}

