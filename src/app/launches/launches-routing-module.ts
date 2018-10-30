import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LanzamientosComponent} from './launches/launches.component';


const routes: Routes = [
  {
    path: '',
    component: LanzamientosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanzamientosRoutingModule {
}
