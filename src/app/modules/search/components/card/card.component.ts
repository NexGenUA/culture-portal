import { Component, Input, OnInit } from '@angular/core';
import { paths } from 'src/app/constants/constants';
import { IWritter } from 'src/app/shared/models/writer.model';
import { NavigateService } from 'src/app/shared/services/navigate.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  writerCard: IWritter;

  constructor(private navigateService: NavigateService) { }

  ngOnInit(): void {
  }

  public selectCard(): void {
    this.navigateService.navigateTo([paths.SEARCH, this.writerCard.surname]);
  }
}
