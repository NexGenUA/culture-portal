import { NgModule } from '@angular/core';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    SharedModule
  ]
})
export class MainModule { }
