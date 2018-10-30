import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {LanzamientoRoutingModule} from './launch-routing-module';
import {LanzamientoComponent} from './launch/launch.component';
import {LanzamientoEffects} from '../reducers/launch/launch.effects';
import {reducer} from '../reducers/launch/launch.reducer';


@NgModule({
  imports: [
    CommonModule,
    LanzamientoRoutingModule,
    SharedModule,
    StoreModule.forFeature('lanzamientoFeature', {launch: reducer}),
    EffectsModule.forFeature([LanzamientoEffects])
  ],
  declarations: [LanzamientoComponent]
})
export class LanzamientoModule {
}
