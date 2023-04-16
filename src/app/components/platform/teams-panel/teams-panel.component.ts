import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-teams-panel',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    FontAwesomeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './teams-panel.component.html',
  styleUrls: ['./teams-panel.component.scss']
})
export class TeamsPanelComponent implements AfterViewInit {

  readonly peopleGroup = faPeopleGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  columnsTeams: string[] = ['team', 'country', 'tournaments'];
  dataSourceTeams: MatTableDataSource<Team>;

  constructor() {
    this.dataSourceTeams = new MatTableDataSource<Team>([
      { id: '1', name: 'Team SoloMid', nameShort: 'TSM', country: 'USA', games: 'Apex Legends', tournaments: 999, logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Team_SoloMid_Logo.png' },
      { id: '2', name: 'Luminosity Gaming', nameShort: 'LG', country: 'MX', games: 'Apex Legends', tournaments: 888, logo: 'https://www.talkesport.com/wp-content/uploads/Luminosity-Gaming.png' },
      { id: 'LlsaA78Dc7GhjG87', name: 'Team 2', nameShort: 'T2', country: 'CA', games: 'CS:GO', tournaments: 2, logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Team_SoloMid_Logo.png' },
      { id: '1', name: 'Team SoloMid', nameShort: 'TSM', country: 'USA', games: 'Apex Legends', tournaments: 999, logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Team_SoloMid_Logo.png' },
      { id: 'sJDhbd867XD7CS7D', name: 'Team 1', nameShort: 'T1', country: 'AR', games: 'Valorant', tournaments: 1, logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Team_SoloMid_Logo.png' },
      { id: 'LlsaA78Dc7GhjG87', name: 'Team 2', nameShort: 'T2', country: 'CA', games: 'CS:GO', tournaments: 2, logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Team_SoloMid_Logo.png' },
      { id: '1', name: 'Team SoloMid', nameShort: 'TSM', country: 'USA', games: 'Apex Legends', tournaments: 999, logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Team_SoloMid_Logo.png' },
      { id: 'sJDhbd867XD7CS7D', name: 'Team 1', nameShort: 'T1', country: 'AR', games: 'Valorant', tournaments: 1, logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Team_SoloMid_Logo.png' },
      { id: 'LlsaA78Dc7GhjG87', name: 'Team 2', nameShort: 'T2', country: 'CA', games: 'CS:GO', tournaments: 2, logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Team_SoloMid_Logo.png' },
    ]);
  }

  ngAfterViewInit() {
    this.dataSourceTeams.paginator = this.paginator;
    this.dataSourceTeams.sort = this.sort;
  }

}
