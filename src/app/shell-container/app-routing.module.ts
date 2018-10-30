import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../home/home.module#HomeModule',
    data: {title: 'states'}
  },
  {
    path: 'launches/:id',
    loadChildren: '../launches/launches.module#LanzamientosModule',
    data: {title: 'launches de un estado'}
  },
  {
    path: 'launch/:id',
    loadChildren: '../launch/launch.module#LanzamientoModule',
    data: {title: 'Detalle launch'}
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
