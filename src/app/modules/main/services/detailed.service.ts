import { Injectable } from '@angular/core';
import { Writer } from 'src/app/shared/models/writer.model';

@Injectable({
  providedIn: 'root'
})
export class DetailedService {

  public selectedCard: Writer = null;

  constructor() { }

  public initDetailedCard(clickedCard: Writer): void {
    this.selectedCard = clickedCard;
  }

}
