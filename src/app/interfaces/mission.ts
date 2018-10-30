import {Agencia} from './agency';

export interface Mision {
  id: number;
  name: string;
  type: number;
  agencies: Agencia[];
}
