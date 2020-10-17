import { Component, OnInit } from '@angular/core';
import { runCssVarsPolyfill } from '@clr/core';
import { AppThemeService } from '../../services/theme/app-theme.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent implements OnInit {
  darkThemeIsActive: boolean = false;
  public disabled = false;
  items: string[] = ['100UsersTest', '16VmVappPerformance'];
  vertical = '';
  darkThemeStyleSheet = document.styleSheets[3];

  constructor(public theme: AppThemeService) {
    for (let i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i]?.href?.includes('clarity-dark'))
        this.darkThemeStyleSheet = document.styleSheets[i];
    }
    console.log('Construct', this.darkThemeStyleSheet?.href);
    this.theme.darkTheme.subscribe(
      (e: boolean) => (this.darkThemeIsActive = e)
    );
  }

  ngOnInit() {
    for (let i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i]?.href?.includes('clarity-dark'))
        this.darkThemeStyleSheet = document.styleSheets[i];
    }
    console.log('Init', this.darkThemeStyleSheet?.href);
    this.darkThemeStyleSheet.disabled = true;
  }

  toggleDarkTheme() {
    for (let i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i]?.href?.includes('clarity-dark'))
        this.darkThemeStyleSheet = document.styleSheets[i];
    }
    console.log('Toggle', this.darkThemeStyleSheet?.href);
    toggleStylesheet(
      this.darkThemeStyleSheet,
      (this.darkThemeIsActive = !this.darkThemeIsActive)
    );
    this.theme.darkTheme.next(this.darkThemeIsActive);
    runCssVarsPolyfill(() => console.log(''));
  }
}

function toggleStylesheet(stylesheet: any, enable: boolean) {
  stylesheet.disabled = !enable;
}
