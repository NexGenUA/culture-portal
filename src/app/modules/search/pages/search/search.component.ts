import { IWritter } from './../../../../shared/models/writer.model';
import { HttpService } from './../../../../shared/services/http.service';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { DetailedService } from '../../services/detailed.service';

const DEBOUNCE_TIME = 300;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public form: FormGroup;
  public searchInstance: 'name' | 'address' = 'name';
  public value = '';
  public searchString: Subscription;
  public writers: IWritter[] = [];

  constructor(
    public httpService: HttpService,
    public detailedService: DetailedService,
    private navigateService: NavigateService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      searchString: new FormControl('searchString')
    });

    this.httpService.getFullBase().then(writers => {
      this.writers = writers;
    });

    this.searchString = this.form.get('searchString').valueChanges
    .pipe(
      debounceTime(DEBOUNCE_TIME)
      )
    .subscribe(
      query => {

        if (this.searchInstance === 'name') {
          this.httpService
          .getCardByName(query)
          .then(writers => {
            this.writers = writers;
          });
        } else {
          this.httpService
          .getCardByAddress(query)
          .then(writers => {
            this.writers = writers;
          });
        }

      }
    );
  }

  public toggleSearchInstance = (): void => {
    if (this.searchInstance === 'name') {
      this.searchInstance = 'address';
    } else {
      this.searchInstance = 'name';
    }
  }

  public selectItem(clickedCard: IWritter): void {
    this.detailedService.initDetailedCard(clickedCard);
    this.navigateService.navigateTo(['/search', this.detailedService.selectedCard.surname]);
  }
}
