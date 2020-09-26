import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IWritter, Writer } from 'src/app/shared/models/writer.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  writerCard: Writer;

  @Output()
  public selectedCard: EventEmitter<Writer> = new EventEmitter<Writer>();


  constructor() { }

  ngOnInit(): void {
  }

  public selectCard(): void {
    this.selectedCard.emit(this.writerCard);
  }

}
