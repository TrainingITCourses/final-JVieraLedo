import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {LaunchesCardComponent} from './launches-card/launches-card.component';
import {LaunchesListComponent} from './launches-list/launches-list.component';
import {StatesListComponent} from './states-list/states-list.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LaunchesCardComponent,
    LaunchesListComponent,
    StatesListComponent
  ],
  exports: [
    LaunchesCardComponent,
    LaunchesListComponent,
    StatesListComponent,
    RouterModule
  ]
})
export class SharedModule {
}
