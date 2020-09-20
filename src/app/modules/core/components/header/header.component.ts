import { Component, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectUrl } from '../../../../store/selectors/router.selectors';
import { paths } from '../../../../constants/constants';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() switcher: EventEmitter<boolean> = new EventEmitter<boolean>();

  public paths = paths;
  public selectUrl$: Observable<string> = this.store$.pipe(select(selectUrl));

  constructor(
    private store$: Store,
    private translate: TranslateService,
  ) { }

  switchTheme(event: MatSlideToggleChange): void {
    this.switcher.emit(event.checked);
  }

  public changeLanguage(event: MatButtonToggleChange) {
    this.translate.use(event.value);
  }
}
