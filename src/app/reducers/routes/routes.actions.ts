import {Action} from '@ngrx/store';

export enum RutasActionTypes {
  CargarRuta = '[Rutas] Cargar',
}

export class CargarRuta implements Action {
  readonly type = RutasActionTypes.CargarRuta;

  constructor(readonly payload: any[]) {
  }
}

export type RutasActions =
  |CargarRuta;
