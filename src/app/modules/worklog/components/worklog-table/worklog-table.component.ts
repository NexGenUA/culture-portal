import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IWorklogItem } from '../../models/worklog-item.model';

@Component({
  selector: 'app-worklog-table',
  templateUrl: './worklog-table.component.html',
  styleUrls: ['./worklog-table.component.scss']
})
export class WorklogTableComponent implements OnInit {
  @Input() tableData: IWorklogItem[];
  public dataSource: MatTableDataSource<IWorklogItem>;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IWorklogItem>(this.tableData);
  }
}
