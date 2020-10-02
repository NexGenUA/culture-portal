import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { constants } from './constants/constants';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUrl } from './store/selectors/router.selectors';
import { slideRoute } from './shared/animations/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideRoute],
})
export class AppComponent {

  public path$: Observable<string> = this.store$.pipe(select(selectUrl));

  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    private renderer: Renderer2,
    private store$: Store,
  ) {
  }

  public switchTheme(thumb: boolean): void {
    const className = thumb ? constants.DARK_THEME : constants.WHITE_THEME;
    this.renderer.setAttribute(this.document.body, 'class', className);
  }
}
