import { Component, Input } from '@angular/core';
import { TeamMember } from '../../team-member.model';

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.scss']
})
export class TeamMemberCardComponent {
  @Input() teamMember: TeamMember;
  @Input() i: number;
}
