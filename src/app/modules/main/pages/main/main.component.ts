import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { IWritter, Writer } from 'src/app/shared/models/writer.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private baseUrl: string = 'assets';

  public writersList: Writer[] = [];

  constructor(private httpCLient: HttpClient) { }

  ngOnInit(): void {
    this.getWriters();
  }

  public getWriters(): void {
    this.httpCLient.get<any>(`${this.baseUrl}/writers.json`)
      .pipe(
        map(json => {
          return (json || [])
          .filter(Boolean)
          .map(Writer.fromJSON);
        })
      )
    .subscribe(response => this.writersList = response);
  }
}
