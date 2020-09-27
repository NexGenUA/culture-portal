import { NgModule } from '@angular/core';
import { SearchComponent } from './pages/search/search.component';
import { SharedModule } from '../../shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { DetailedComponent } from './components/detailed/detailed.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchRoutingModule } from './search-routing.module';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    SearchComponent,
    CardComponent,
    DetailedComponent,
    ModalComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
