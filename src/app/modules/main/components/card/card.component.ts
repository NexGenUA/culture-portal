import { Component, Input, OnInit } from '@angular/core';
import { IWritter, Writer } from 'src/app/shared/models/writer.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  writerCard: Writer;

  constructor() { }

  ngOnInit(): void {
  }

}
