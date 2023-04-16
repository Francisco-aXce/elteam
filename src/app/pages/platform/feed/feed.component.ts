import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { TeamsPanelComponent } from 'src/app/components/platform/teams-panel/teams-panel.component';
import { PlayersPanelComponent } from 'src/app/components/platform/players-panel/players-panel.component';
import { GamesPanelComponent } from 'src/app/components/platform/games-panel/games-panel.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,

    TeamsPanelComponent,
    PlayersPanelComponent,
    GamesPanelComponent,
  ],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

}
