import { NgModule } from '@angular/core';
import { WorklogComponent } from './worklog/worklog.component';
import { SharedModule } from '../../shared/shared.module';
import { WorklogTableComponent } from './components/worklog-table/worklog-table.component';

@NgModule({
  declarations: [WorklogComponent, WorklogTableComponent],
  imports: [
    SharedModule
  ]
})
export class WorklogModule { }
