import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { WritersComponent } from './pages/writers/writers.component';
import { WritersRoutingModule } from './writers-routing.module';

@NgModule({
  declarations: [WritersComponent],
  imports: [
    SharedModule,
    WritersRoutingModule,
  ]
})
export class WritersModule { }
