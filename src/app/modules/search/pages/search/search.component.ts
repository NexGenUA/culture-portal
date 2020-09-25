import { IWritter } from './../../../../shared/models/writer.model';
import { HttpService } from './../../../../shared/services/http.service';
import { filter, debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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

  constructor(public httpService: HttpService) { }

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
        this.httpService
          .getCardByName(query)
          .then(writers => {
            this.writers = writers;
          });
      }
    );
  }

  public toggleSearchInstance = () => {
    if (this.searchInstance === 'name') {
      this.searchInstance = 'address';
    } else {
      this.searchInstance = 'name';
    }
  }

}
