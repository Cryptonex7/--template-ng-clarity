import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/page-one/page-one.module').then((m) => m.PageOneModule),
    pathMatch: 'full',
  },
  {
    path: 'Page1',
    loadChildren: () =>
      import('./pages/page-one/page-one.module').then((m) => m.PageOneModule),
    pathMatch: 'full',
  },
  {
    path: 'Page2',
    loadChildren: () =>
      import('./pages/page-two/page-two.module').then((m) => m.PageTwoModule),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
