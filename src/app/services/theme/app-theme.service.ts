import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppThemeService {
  darkTheme = new Subject();

  constructor() {}
}
