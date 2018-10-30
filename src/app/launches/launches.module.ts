import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {LanzamientosRoutingModule} from './launches-routing-module';
import {LanzamientosComponent} from './launches/launches.component';
import {LanzamientosEffects} from '../reducers/launches/launches.effects';
import {reducer} from '../reducers/launches/launches.reducer';


@NgModule({
  imports: [
    CommonModule,
    LanzamientosRoutingModule,
    SharedModule,
    StoreModule.forFeature('lanzamientosFeature', {launches: reducer}),
    EffectsModule.forFeature([LanzamientosEffects])
  ],
  declarations: [LanzamientosComponent]
})
export class LanzamientosModule {
}
