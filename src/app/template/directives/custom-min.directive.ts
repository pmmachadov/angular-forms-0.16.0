import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({ // Decorador
    selector: '[customMin][ngModel]', // Selector del elemento html que se va a validar (customMin) y el ngModel que se va a validar (ngModel)
    providers: [{ // Proveedores
        provide: NG_VALIDATORS, // Proveedor de validadores
        useExisting: CustomMinDirective, // Usar la directiva existente
        multi: true // Multiples validadores
    }]
})
export class CustomMinDirective implements Validator { // Exportar la clase

    @Input() minimo!: number; // Input del minimo

    constructor() {} // Constructor

    validate( control: FormControl ) { // Metodo para validar
        const inputValue = control.value; // Valor del input
        return ( inputValue < this.minimo ) // Si el valor del input es menor al minimo
                ? { 'customMin': true } // Retornar el error
                : null; // Retornar nulo
    }

}