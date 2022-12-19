import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos', // Nombre del componente
  templateUrl: './basicos.component.html', // Direccion del template
  styles: [
  ]
})
export class BasicosComponent implements OnInit { // Exportar la clase

  @ViewChild('miFormulario') miFormulario!: NgForm; // Referencia al formulario

  initForm = { // Objeto inicial
    producto: 'RTX 4080ti', // Valor inicial
    precio: 10, // Valor inicial
    existencias: 10 // Valor inicial
  }

  constructor() { } // Constructor

  ngOnInit(): void { // Metodo inicial
  }

  nombreValido(): boolean { // Metodo para validar el nombre
    return this.miFormulario?.controls.producto?.invalid // Si el nombre es invalido
            && this.miFormulario?.controls.producto?.touched; // Si el nombre es invalido y se ha tocado
  }

  precioValido():boolean { // Metodo para validar el precio
    return this.miFormulario?.controls.precio?.touched // Si el precio es invalido y se ha tocado
            && this.miFormulario?.controls.precio?.value < 0; // Si el precio es invalido y es menor a 0
  }

  // guardar( miFormulario: NgForm ) {
  guardar() { // Metodo para guardar el formulario
    // console.log( this.miFormulario );
    console.log('Posteo correcto');

    this.miFormulario.resetForm({ // Resetear el formulario
      producto: 'Algo', // Valor inicial
      precio: 0, // Valor inicial
      existencias: 0 // Valor inicial
    });
  }

}
