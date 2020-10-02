import { Component } from '@angular/core';
import { TeamMember } from '../../team-member.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  members: TeamMember[] = [
    {
      nick: 'Raccoon2508',
      img: 'https://avatars3.githubusercontent.com/u/45191288?v=4',
      github: 'github.com/Raccoon2508'
    },
    {
      nick: 'nexgenua',
      img: 'https://avatars0.githubusercontent.com/u/26595679?v=4',
      github: 'github.com/NexGenUA'
    },
    {
      nick: 'dinosavr',
      img: 'https://avatars1.githubusercontent.com/u/23016888?v=4',
      github: 'github.com/dinosavr'
    },
    {
      nick: 'AlexanderFraltsov',
      img: 'https://avatars2.githubusercontent.com/u/48531801?v=4',
      github: 'github.com/AlexanderFraltsov'
    },
    {
      nick: 'pavelasadchy',
      img: 'https://avatars2.githubusercontent.com/u/61987082?v=4',
      github: 'github.com/PavelAsadchy'
    }
  ];
}
