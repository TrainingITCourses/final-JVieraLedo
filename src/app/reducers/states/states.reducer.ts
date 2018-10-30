import {EstadosActions, EstadosActionTypes} from './states.actions';
import {Estado} from '../../interfaces/state';


export interface StatesState {
  states: Estado[];
  cargados: boolean;
}

export const initialState: StatesState = {
  states: [],
  cargados: false
};

export function reducer(state = initialState, action: EstadosActions): StatesState {
  switch (action.type) {
    case EstadosActionTypes.CargarEstados:
      return {...state, cargados: false};
    case EstadosActionTypes.EstadosCargados:
      return {...state, states: action.payload, cargados: true};
    case EstadosActionTypes.EstadosNoCargados:
      this.message = action.payload;
      break;
    default:
      return {...state};
  }
}
