import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path: '', // Ruta padre
    children: [ // Rutas hijas
      { path: 'basicos', component: BasicosComponent }, // Ruta basica
      { path: 'dinamicos', component: DinamicosComponent },
      { path: 'switches', component: SwitchesComponent },
      { path: '**', redirectTo: 'basicos' },
    ]
  }
];

@NgModule({ // Decorador
  imports: [ // Importaciones
    RouterModule.forChild(routes) // Rutas hijas
  ],
})
export class TemplateRoutingModule { } // Exportar la clase
