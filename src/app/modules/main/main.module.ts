import { NgModule } from '@angular/core';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from '../../shared/shared.module';
import { CardComponent } from './components/card/card.component';

import { HttpClientModule } from '@angular/common/http';
import { DetailedComponent } from './components/detailed/detailed.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainComponent, CardComponent, DetailedComponent],
  imports: [
    SharedModule,
    HttpClientModule,
    MainRoutingModule
  ]
})
export class MainModule { }
