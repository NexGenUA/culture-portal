import { NgModule } from '@angular/core';
import { SearchComponent } from './pages/search/search.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    SharedModule
  ]
})
export class SearchModule { }
