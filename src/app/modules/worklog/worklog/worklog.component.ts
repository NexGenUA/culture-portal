import { Component, OnInit } from '@angular/core';

import { IWorklogItem } from '../models/worklog-item.model';

const ELEMENTS: IWorklogItem[] = [
  {
    feature: 'feature',
    timeSpent: 1,
    startDate: new Date('2020-09-20'),
    endDate: new Date('2020-09-20'),
  }
];

const enum developers {
  ASADCHY = 'Pavel Asadchy',
  FRALTSOV = 'Alexander Fraltsov',
  RUDNIK = 'Mikita Rudnik',
  SIDOROV = 'Alexandr Sidorov',
  STEPOVENKO = 'Valentyn Stepovenko'
}

const MOCK_DATA = [
  {
    user: developers.ASADCHY,
    features: ELEMENTS
  },
  {
    user: developers.FRALTSOV,
    features: ELEMENTS
  },
  {
    user: developers.RUDNIK,
    features: ELEMENTS
  },
  {
    user: developers.SIDOROV,
    features: ELEMENTS
  },
  {
    user: developers.STEPOVENKO,
    features: ELEMENTS
  }
];

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html',
  styleUrls: ['./worklog.component.scss']
})
export class WorklogComponent implements OnInit {

  public tableData = MOCK_DATA;
  constructor() { }

  ngOnInit(): void {
  }
}
