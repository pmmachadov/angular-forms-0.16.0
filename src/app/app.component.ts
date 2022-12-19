import { Component } from '@angular/core';

@Component({ // Decorador. Un decorador es una funcion que se ejecuta cuando se crea la clase y recibe como parametro el constructor de la clase que se esta decorando (AppComponent) y retorna un objeto con las propiedades del componente (selector, templateUrl, styleUrls) y los metodos del componente (export class AppComponent)
  selector: 'app-root', // Nombre del componente
  templateUrl: './app.component.html', // Direccion del template
  styleUrls: ['./app.component.css'] // Direccion del css
})
export class AppComponent { // Exportar la clase
  title = 'formulariosApp'; // Titulo de la aplicacion
}
