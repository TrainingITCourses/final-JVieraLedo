import {RutasActions, RutasActionTypes} from './routes.actions';

export interface RoutesState {
  cargada: boolean;
  mensaje: string;
  botonVolver: boolean;
  botonFechas: boolean;
  idEstado: number;
  actual: string;
}

export const initialState: RoutesState = {
  cargada: false,
  mensaje: '',
  botonVolver: false,
  botonFechas: false,
  idEstado: 0,
  actual: '',
};

export function reducer(state = initialState, action: RutasActions): RoutesState {
  switch (action.type) {
    case RutasActionTypes.CargarRuta:
      state.cargada = true;
      state.mensaje = action.payload[0];
      state.botonVolver = action.payload[1];
      state.botonFechas = action.payload[2];
      state.idEstado = action.payload[3];
      state.actual = action.payload[4];
      return {...state};
    default:
      return state;
  }
}
