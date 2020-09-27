import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { IEntry } from 'src/app/shared/models/entry.model';
import { ITimelineItem, IVideo } from 'src/app/shared/models/writer.model';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { DetailedService } from '../../services/detailed.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss']
})
export class DetailedComponent implements OnInit {

  public panelTimelineOpenState = false;
  public panelGalleryOpenState = false;
  public panelVideoOpenState = false;

  public alternate = true;
  public toggle = true;
  public color = false;
  public size = 30;
  public expandEnabled = true;
  public contentAnimation = true;
  public dotAnimation = true;
  public side = 'left';

  public entries: IEntry[] = [];


  constructor(public detailedService: DetailedService,
              private navigateService: NavigateService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.detailedService.selectedCard.timeline
      .forEach((fact: ITimelineItem) => this.entries
        .push(
          {
            header: fact.year,
            content: fact.event
          }
        )
      );
  }

  public returnToMain(): void {
    this.navigateService.navigateTo(['/search']);
  }

  public onHeaderClick(event: Event): void {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  public onDotClick(event: Event): void {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  public openDialog(video: IVideo): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = video;

    this.dialog.open(ModalComponent, dialogConfig);
  }

}
