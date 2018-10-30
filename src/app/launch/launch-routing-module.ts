import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LanzamientoComponent} from './launch/launch.component';

const routes: Routes = [
  {
    path: '',
    component: LanzamientoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanzamientoRoutingModule {
}
