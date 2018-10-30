import {LanzamientoActions, LanzamientoActionTypes} from './launch.actions';
import {Launch} from '../../interfaces/launch';

export interface LaunchState {
  launch: Launch[];
  cargado: boolean;
  mensaje?: string;
}

export const initialState: LaunchState = {
  launch: [],
  cargado: false
};

export function reducer(state = initialState, action: LanzamientoActions): LaunchState {
  switch (action.type) {
    case LanzamientoActionTypes.CargarLanzamiento:
      return {...state, cargado: false};
    case LanzamientoActionTypes.LanzamientoCargado:
      state.launch = action.payload;
      return {...state, cargado: true};
    case LanzamientoActionTypes.LanzamientoNoCargado:
      state.launch = [];
      return {...state};
    default:
      return {...state};
  }
}

