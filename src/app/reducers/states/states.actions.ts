import {Action} from '@ngrx/store';
import {Estado} from '../../interfaces/state';

export enum EstadosActionTypes {
  CargarEstados = '[states] Cargar',
  EstadosCargados = '[states] Cargados',
  EstadosNoCargados = '[states] No Cargados',
}

export class CargarEstados implements Action {
  readonly type = EstadosActionTypes.CargarEstados;
}

export class EstadosCargados implements Action {
  readonly type = EstadosActionTypes.EstadosCargados;

  constructor(public readonly payload: Estado[]) {
  }
}

export class EstadosNoCargados implements Action {
  readonly type = EstadosActionTypes.EstadosNoCargados;

  constructor(public readonly payload: string) {
  }
}

export type EstadosActions =
  | CargarEstados
  | EstadosCargados
  | EstadosNoCargados;
