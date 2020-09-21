import { Component, OnInit } from '@angular/core';
import { developers, MOCK_DATA, SCOPES, SCOPES_TITLES } from '../constants/constants';

import { IScopeItem } from '../models/scope-item.model';
import { IWorklogItem } from '../models/worklog-item.model';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html',
  styleUrls: ['./worklog.component.scss']
})
export class WorklogComponent implements OnInit {

  public tableData: {
    user: developers,
    features: IWorklogItem[]
  }[] = MOCK_DATA;

  public scopes: {
    title: SCOPES_TITLES,
    items: IScopeItem[]
  }[] = SCOPES;

  public scopesScores: number[];
  public scopesMaxScores: number[];

  constructor() { }

  ngOnInit(): void {
    this.scopesScores = this.scopes.map(({items}) => this.getScopeScore(items));
    this.scopesMaxScores = this.scopes.map(({items}) => this.getMaxScopeScore(items));
  }

  public getScopeScore( scope: IScopeItem[]): number {
    return scope
      .filter(item => item.checked)
      .reduce((score, item) => score + item.score, 0);
  }

  public getMaxScopeScore( scope: IScopeItem[]): number {
    return scope.reduce((score, item) => score + item.score, 0);
  }

  public getTotalScore(): number {
    return this.scopesScores.reduce((acc, score) => acc + score);
  }

  public getMaxTotalScore(): number {
    return this.scopesMaxScores.reduce((acc, score) => acc + score);
  }
}
