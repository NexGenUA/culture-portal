import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/main/pages/home/home.component';
import { TeamComponent } from './modules/team/pages/team/team.component';
import { WorklogComponent } from './modules/worklog/worklog/worklog.component';
import { WritersComponent } from './modules/writers/pages/writers/writers.component';
import { NotFoundComponent } from './modules/core/components/not-found/not-found.component';
import { paths } from './constants/constants';
import { StyleguideComponent } from './modules/styleguide/pages/styleguide/styleguide.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  {
    path: paths.SEARCH,
    loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule)
  },
  {
    path: paths.TEAM,
    component: TeamComponent,
    loadChildren: () => import('./modules/team/team.module').then(m => m.TeamModule)
  },
  {
    path: paths.WORKLOG,
    component: WorklogComponent,
    loadChildren: () => import('./modules/worklog/worklog.module').then(m => m.WorklogModule)
  },
  {
    path: paths.STYLEGUIDE,
    component: StyleguideComponent,
    loadChildren: () => import('./modules/styleguide/styleguide.module').then(m => m.StyleguideModule)
  },
  {
    path: `${paths.WRITERS}/:${paths.WRITER_ID}`,
    component: WritersComponent,
    loadChildren: () => import('./modules/writers/writers.module').then(m => m.WritersModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
