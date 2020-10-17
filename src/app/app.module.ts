import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalModule } from './global/global.module';
// Layout Components
import { AppbarComponent } from './layout/appbar/appbar.component';
import { SideDrawerComponent } from './layout/side-drawer/side-drawer.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
// Home Page Components
// Pages

@NgModule({
  declarations: [AppComponent, SideDrawerComponent, AppbarComponent, PageOneComponent, PageTwoComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    GlobalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
