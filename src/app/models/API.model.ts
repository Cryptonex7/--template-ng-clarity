import { Build } from './Build.model';

export interface API {
  apiName: string;
  builds: Map<string, Build>;
  selected: boolean;
}
