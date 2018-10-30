import {Mision} from './mission';
import {Rocket} from './rocket';


export interface Launch {
  id: number;
  name: string;
  status: number;
  missions: Mision[];
  windowstart: Date;
  isostart: Date;
  rocket: Rocket[];
}
