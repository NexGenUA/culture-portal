import { Injectable } from '@angular/core';
import { IWritter } from 'src/app/shared/models/writer.model';

@Injectable({
  providedIn: 'root'
})
export class DetailedService {

  public selectedCard: IWritter = null;

  constructor() { }

  public initDetailedCard(clickedCard: IWritter): void {
    this.selectedCard = clickedCard;
  }
}
