import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectWriterId } from 'src/app/store/selectors/router.selectors';

@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.scss']
})
export class WritersComponent {
  public selectWriterId$: Observable<string> = this.store$.pipe(select(selectWriterId));

  constructor(private store$: Store) {
  }
}
