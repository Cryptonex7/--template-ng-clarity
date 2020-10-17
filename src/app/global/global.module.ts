import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { runCssVarsPolyfill } from '@clr/core';
import player from 'lottie-web';
import { ChartsModule } from 'ng2-charts';
import { LottieModule } from 'ngx-lottie';
import { RoundoffPipe } from '../pipes/roundoff.pipe';
import { ShortenPipe } from '../pipes/shorten.pipe';
import { TimePipe } from '../pipes/time.pipe';
import { ToDateTimePipe } from '../pipes/to-date-time.pipe';
import { AlertBarComponent } from './alert-bar/alert-bar.component';
import { ChartComponent } from './chart/chart.component';
import { LoaderComponent } from './loader/loader.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

// Updating CSS Variables When Changing Themes
runCssVarsPolyfill(() => console.log(''));

@NgModule({
  declarations: [
    ChartComponent,
    LoaderComponent,
    NotFoundComponent,
    AlertBarComponent,
    ShortenPipe,
    RoundoffPipe,
    ToDateTimePipe,
    TimePipe,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    ClrIconModule,

    ChartsModule,
    ReactiveFormsModule,
    RouterModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [
    ChartComponent,
    LoaderComponent,
    NotFoundComponent,
    AlertBarComponent,
    CommonModule,
    ClarityModule,
    ClrIconModule,

    ChartsModule,
    ReactiveFormsModule,
    RouterModule,
    LottieModule,
    ShortenPipe,
    RoundoffPipe,
    ToDateTimePipe,
    TimePipe,
  ],
})
export class GlobalModule {}
