import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { constants } from './constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    private renderer: Renderer2
    ) {
  }

  public switchTheme(thumb: boolean): void {
    const className = thumb ? constants.DARK_THEME : constants.WHITE_THEME;
    this.renderer.setAttribute(this.document.body, 'class', className);
  }
}
