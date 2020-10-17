import { environment } from '../../environments/environment';
export const API_URL = environment.production
  ? 'http://<YOUR PRODUCTION API>'
  : 'http://<YOUR DEVELOPMENT API>';

export const LAB_LIST = ['Kepler', 'Stella', 'VVD', 'Interop'];
