import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { constants, searchInstances } from '../../../../constants/constants';
import { IWritter } from '../../../../shared/models/writer.model';
import { HttpService } from '../../../../shared/services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public searchInstance: searchInstances = searchInstances.NAME;
  public searchString: Subscription;
  public writers: IWritter[] = [];

  constructor(private httpService: HttpService) { }

  public ngOnInit(): void {
    this.form = new FormGroup({
      searchValue: new FormControl('')
    });

    this.httpService.getFullBase().then(writers => {
      this.writers = writers;
    });

    this.searchString = this.form.get('searchValue').valueChanges
    .pipe(debounceTime(constants.SEARCH_DEBOUNCE_TIME))
    .subscribe(
      query => {
        this.httpService
          .getCardByParam(query, this.searchInstance)
          .then(writers => {
            this.writers = writers;
          });
      }
    );
  }

  public ngOnDestroy(): void {
    this.searchString.unsubscribe();
  }

  public get searchValue(): string {
    return this.form.get('searchValue').value;
  }

  public clearValue(): void {
    this.form.setValue({searchValue: ''});
  }

  public toggleSearchInstance = (): void => {
    if (this.searchInstance === searchInstances.NAME) {
      this.searchInstance = searchInstances.ADDRESS;
    } else {
      this.searchInstance = searchInstances.NAME;
    }
  }
}
