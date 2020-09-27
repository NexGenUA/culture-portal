import { Component, OnInit } from '@angular/core';
import { paths } from 'src/app/constants/constants';
import { IWritter } from 'src/app/shared/models/writer.model';
import { HttpService } from 'src/app/shared/services/http.service';
import { NavigateService } from 'src/app/shared/services/navigate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public randomCard: IWritter = null;

  constructor(private httpService: HttpService,
              private navigateService: NavigateService) { }

  ngOnInit(): void {
    this.httpService.getRandomCard().then(writer => {
      this.randomCard = writer;
    });
  }

  public goToSearch(): void {
    this.navigateService.navigateTo([paths.SEARCH]);
  }
}
