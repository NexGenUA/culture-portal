import { NgModule } from '@angular/core';
import { TeamComponent } from './pages/team/team.component';
import { SharedModule } from '../../shared/shared.module';
import { TeamMemberCardComponent } from './components/team-member-card/team-member-card.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TeamComponent, TeamMemberCardComponent],
  imports: [
    SharedModule,
    TranslateModule
  ]
})
export class TeamModule { }
