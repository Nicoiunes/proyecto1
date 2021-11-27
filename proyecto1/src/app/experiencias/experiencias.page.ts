import { Component, OnInit } from '@angular/core';
import { experienciasService } from './experiencias.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.page.html',
  styleUrls: ['./experiencias.page.scss'],
})
export class ExperienciasPage implements OnInit {

  constructor(private experienciasService: experienciasService) {}

public fotos:any

  ngOnInit(){
    this.experienciasService.getData().subscribe(data =>{
      console.log(data[0].url);

this.fotos=data
    })
  }}

