import {Action} from '@ngrx/store';
import {Launch} from '../../interfaces/launch';
import {LanzamientosActions, LanzamientosActionTypes} from './launches.actions';

export interface LaunchState {
  launches: Launch[];
  mensaje?: string;
  cargados: boolean;
}

export const initialState: LaunchState = {
  launches: [],
  mensaje: '',
  cargados: false,
};

export function reducer(state = initialState, action: LanzamientosActions): LaunchState {
  switch (action.type) {
    case LanzamientosActionTypes.CargarLanzamientos:
      return {...state, cargados: false};
    case LanzamientosActionTypes.LanzamientosCargados:
      state.cargados = true;
      state.launches = action.payload;
      state.mensaje = null;
      return {...state};
    case LanzamientosActionTypes.LanzamientosNoCargados:
      state.launches = [];
      state.mensaje = action.payload;
      return {...state};
    default:
      return {...state};
  }
}
