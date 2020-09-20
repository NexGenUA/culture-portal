import { NgModule } from '@angular/core';
import { WorklogComponent } from './worklog/worklog.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [WorklogComponent],
  imports: [
    SharedModule
  ]
})
export class WorklogModule { }
