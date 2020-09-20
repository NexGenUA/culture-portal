import { NgModule } from '@angular/core';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [StyleguideComponent],
  imports: [
    SharedModule
  ]
})
export class StyleguideModule { }
