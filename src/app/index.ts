import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../environments/environment';
import * as fromLaunches from './reducers/launches/launches.reducer';
import * as fromStates from './reducers/states/states.reducer';
import * as fromLaunch from './reducers/launch/launch.reducer';
import * as fromRoute from './reducers/routes/routes.reducer';


export interface GlobalState {
  launches: fromLaunches.LaunchState;
  states: fromStates.StatesState;
  launch: fromLaunch.LaunchState;
  route: fromRoute.RoutesState;
}

export const reducers: ActionReducerMap<GlobalState> = {
  launches: fromLaunches.reducer,
  states: fromStates.reducer,
  launch: fromLaunch.reducer,
  route: fromRoute.reducer,
};


export const metaReducers: MetaReducer<GlobalState>[] = !environment.production ? [] : [];
