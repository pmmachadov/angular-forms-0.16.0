import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent  { // Exportar la clase

  persona = { // Objeto
    genero: 'F', // Valor inicial por defecto
    notificaciones: true, // Valor inicial por defecto
  }

  terminosYCondiciones: boolean = false; // Valor inicial por defecto



}
