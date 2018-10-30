import {Launch} from '../../interfaces/launch';
import {Estado} from '../../interfaces/state';

export interface Global {
  launches: Launch[];
  states: Estado[];
}

export const globalInitialState: Global = {
  launches: [],
  states: [],
};
