import { NgModule } from '@angular/core';
import { GlobalModule } from 'src/app/global/global.module';
import { PageOneRoutingModule } from './page-one-routing.module';

@NgModule({
  declarations: [],
  imports: [GlobalModule, PageOneRoutingModule],
})
export class PageOneModule {}
