import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WritersComponent } from './pages/writers/writers.component';

const routes: Routes = [
  {
    path: '',
    component: WritersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class WritersRoutingModule {
}
