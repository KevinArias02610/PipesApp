import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {
  public nombreLower: string = 'julián';
  public nombreUpper: string = 'JULIÁN';
  public nombreCompleto: string = 'jUlIaN aRiAs';
  public original: string = 'Original: ';
  
  public fecha: Date = new Date();
}
