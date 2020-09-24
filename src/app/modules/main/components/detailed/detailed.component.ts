import { Component, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { DetailedService } from '../../services/detailed.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss']
})
export class DetailedComponent implements OnInit {

  public panelTimelineOpenState = false;

  public panelGalleryOpenState = false;

  public panelVideoOpenState = false;

  constructor(public detailedService: DetailedService,
              private navigateService: NavigateService) { }

  ngOnInit(): void {
  }

  public returnToMain(): void {
    this.navigateService.navigateTo(['/main']);
  }

}
