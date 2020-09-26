import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IWritter, Writer } from 'src/app/shared/models/writer.model';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { DetailedService } from '../../services/detailed.service';
import { map } from 'rxjs/operators';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private baseUrl: string = 'assets';

  public writersList: IWritter[] = [];

  constructor(private httpCLient: HttpClient,
              public detailedService: DetailedService,
              private navigateService: NavigateService,
              // private httpService: HttpService
              ) { }

  ngOnInit(): void {
    // this.httpService.base;
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

  public selectItem(clickedCard: Writer): void {
    this.detailedService.initDetailedCard(clickedCard);
    this.navigateService.navigateTo(['/search', this.detailedService.selectedCard.surname]);
  }
}
