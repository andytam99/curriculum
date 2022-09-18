import { Component, OnInit } from '@angular/core';
import { Habilidades as Hbtype } from 'src/app/interfaces/habilidades';
import { Idiomas as Idtype } from 'src/app/interfaces/idiomas';
import { Habilidades } from 'src/app/mocks/habilidades';
import { Idiomas } from 'src/app/mocks/idiomas';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  habilidades: Hbtype[] = Habilidades;
  idiomas: Idtype[] = Idiomas;

  constructor() {}

  ngOnInit(): void {}
}
