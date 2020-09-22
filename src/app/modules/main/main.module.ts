import { NgModule } from '@angular/core';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from '../../shared/shared.module';
import { CardComponent } from './components/card/card.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MainComponent, CardComponent],
  imports: [
    SharedModule,
    HttpClientModule
  ]
})
export class MainModule { }
