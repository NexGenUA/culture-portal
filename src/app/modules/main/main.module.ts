import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule
  ]
})
export class MainModule { }
