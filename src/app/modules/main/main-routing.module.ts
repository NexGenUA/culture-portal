import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedComponent } from './components/detailed/detailed.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
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
export class MainRoutingModule { }
