import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}



@Component({
  selector: 'app-dinamicos', // Nombre del componente <app-dinamicos></app-dinamicos>
  templateUrl: './dinamicos.component.html', // Direccion del template
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = ''; // Es el valor que se va a agregar al arreglo de favoritos

  persona: Persona = { // Es el objeto que se va a enviar al formulario
    nombre: 'Fernando', // Es el valor que se va a enviar al input de nombre
    favoritos: [  // Es el arreglo que se va a enviar al formulario
      { id: 1, nombre: 'Metal Gear' }, // Es el valor que se va a enviar al input de favoritos
      { id: 2, nombre: 'Death Stranding' }, // Es el valor que se va a enviar al input de favoritos
    ]
  }

  agregarJuego() { // Metodo para agregar un nuevo juego al arreglo de favoritos
    const nuevoFavorito: Favorito = { // Es el objeto que se va a agregar al arreglo de favoritos
      id: this.persona.favoritos.length + 1, // Es el valor que se va a enviar al input de id
      nombre: this.nuevoJuego // Es el valor que se va a enviar al input de nombre
    }

    this.persona.favoritos.push({ ...nuevoFavorito }); // Agregar el nuevo favorito al arreglo de favoritos. Los tres puntos son para clonar el objeto y no enviar una referencia al mismo objeto en memoria
    this.nuevoJuego = ''; // Limpiar el input de nuevo juego
  }

  eliminar( index: number ) { // Metodo para eliminar un juego del arreglo de favoritos
    this.persona.favoritos.splice(index, 1); // Eliminar el juego del arreglo de favoritos. Splice recibe dos parametros, el primero es la posicion del arreglo y el segundo es la cantidad de elementos que se van a eliminar. En este caso elimina un elemento porque el segundo parametro es 1. Si fuera 2, eliminaria dos elementos.
  }


  guardar() { // Metodo para guardar el formulario
    console.log('formulario posteado'); // Imprimir en consola
  }
}
