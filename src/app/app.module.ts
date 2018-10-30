import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from '.';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {ApiService} from './services/api.service';
import {EffectsModule} from '@ngrx/effects';
import {LanzamientosEffects} from './reducers/launches/launches.effects';
import {EstadosEffects} from './reducers/states/states.effects';
import {LanzamientoEffects} from './reducers/launch/launch.effects';
import {ServiceWorkerModule} from '@angular/service-worker';
import {ShellContainerComponent} from './shell-container/shell-container/shell-container.component';
import {NavComponent} from './shell-container/nav/nav.component';

import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {AppRoutingModule} from './shell-container/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ShellContainerComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    EffectsModule.forRoot([EstadosEffects, LanzamientosEffects, LanzamientoEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
