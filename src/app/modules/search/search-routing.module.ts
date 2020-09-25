import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedComponent } from './components/detailed/detailed.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: ':id',
    component: DetailedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
