import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  //I18nSelectPipe
  public nombre: string = 'Julián Arias';
  public genero: string = 'masculino';
  public invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  };

  //I18nPluralPipe
  public clientes: string[] = ['Pedro', 'Juana', 'Camilo', 'Julian', 'Tatiana', 'Yanneth'];
  public clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': `tenemos # clientes esperando.`
  };

  cambiarCliente(){
    if(this.genero == 'femenino'){
      this.nombre = 'Julián';
      this.genero = 'masculino';
    }else{
      this.nombre = 'Teresa';
      this.genero = 'femenino'
    };
  }

  borrarCliente(){
    this.clientes.shift();
  }

  //Keyvalue Pipe

  public persona = {
    nombre: 'Julian',
    edad: 35,
    dirección: 'Bogotá, Colombia'
  };

  //Json Pipe

  public heroes = [
    {nombre: 'Superman', vuela: true },
    {nombre: 'Robin', vuela: false },
    {nombre: 'Linterna Verde', vuela: true },
  ];

  //Async Pipe
  public miObservable = interval(1000);
  public valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve ('Fin de la promesa.')
    }, 3500);
  });

}
