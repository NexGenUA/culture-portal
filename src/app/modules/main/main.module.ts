import { NgModule } from '@angular/core';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [MainComponent, HomeComponent, CardComponent],
  imports: [
    SharedModule
  ]
})
export class MainModule { }
