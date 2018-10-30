import {Agencia} from './agency';

export interface Rocket {
  id: number;
  name: string;
  agencies: Agencia[];
  imagenURL: string;
}
