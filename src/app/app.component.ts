import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public tabs: string[] = ['Tab1', 'Tab2'];
  public structure: any = {
    Tab1: ['Page1', 'Page2'],
    Tab2: ['Page1', 'Page2'],
  };
  constructor() {
    console.log(
      `%cENV: ${environment.production ? 'Production' : 'Development'}`,
      'color:green;'
    );
  }

  ngOnInit() {}
}
