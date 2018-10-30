import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {HomeRoutingModule} from './home-rounting.module';
import {HomeComponent} from './home/home.component';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {EstadosEffects} from '../reducers/states/states.effects';
import {reducer} from '../reducers/states/states.reducer';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    StoreModule.forFeature('estadosFeature', {states: reducer}),
    EffectsModule.forFeature([EstadosEffects])
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
