import { Component, Input, OnInit } from '@angular/core';
import { IScopeItem } from '../../models/scope-item.model';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.scss']
})
export class ScopeComponent implements OnInit {
  @Input() public scope: IScopeItem[];
  constructor() { }

  ngOnInit(): void {
  }

}
