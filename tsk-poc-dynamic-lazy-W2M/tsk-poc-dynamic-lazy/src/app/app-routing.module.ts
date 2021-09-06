import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MagnoliaResolverService } from './core/services/magnolia-resolver.service'

const routes: Routes = [
  {
    path: '**',
    resolve: { content: MagnoliaResolverService },
    loadChildren: () => import('./pages/page-dynamic/page-dynamic.module').then(m => m.PageDynamicModule),
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  // },
  // {
  //   path: 'about-structure',
  //   loadChildren: () => import('./pages/about-structure/about-structure.module').then(m => m.AboutStructureModule),
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
