import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IWritter } from 'src/app/shared/models/writer.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  writerCard: IWritter;

  @Output()
  public selectedCard: EventEmitter<IWritter> = new EventEmitter<IWritter>();


  constructor() { }

  ngOnInit(): void {
  }

  public selectCard(): void {
    this.selectedCard.emit(this.writerCard);
  }

}
