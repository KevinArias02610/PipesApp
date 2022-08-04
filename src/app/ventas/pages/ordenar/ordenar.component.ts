import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent {

  public enMayusculas: boolean = true;
  public ordenarPor: string = '';

  public heroes: Heroe[] = [
    {nombre: 'Superman', vuela: true, color: Color.azul},
    {nombre: 'Robin', vuela: false, color: Color.verde},
    {nombre: 'Spiderman', vuela: false, color: Color.rojo},
    {nombre: 'Ironman', vuela: true, color: Color.rojo},
    {nombre: 'Batman', vuela: false, color: Color.negro},
  ];

  public heroes2: Heroe[] = [...this.heroes];

  modificarParametro(){
    this.enMayusculas = !this.enMayusculas;
  };

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }

}
