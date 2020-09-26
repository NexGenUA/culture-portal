import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private router: Router) { }

  public navigateTo(path: string[]): void {
    this.router.navigate(path);
  }

}
