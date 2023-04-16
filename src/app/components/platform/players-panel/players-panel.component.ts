import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons';
import { UserAsPlayer } from 'src/app/models/user.model';

@Component({
  selector: 'app-players-panel',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    FontAwesomeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './players-panel.component.html',
  styleUrls: ['./players-panel.component.scss']
})
export class PlayersPanelComponent implements AfterViewInit {

  readonly userNinja = faUserNinja;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  columns: string[] = ['player', 'country', 'team'];
  dataSource: MatTableDataSource<UserAsPlayer>;

  constructor() {
    this.dataSource = new MatTableDataSource<UserAsPlayer>([
      { id: '1', firstName: 'Phillip', lastName: 'Dosen', nickName: 'ImperialHal', country: 'USA', team: { id: '1', nameShort: 'TSM', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Team_SoloMid_Logo.png' } },
      { id: '2', firstName: 'Evan', lastName: 'Verhulst', nickName: 'Verhulst', country: 'USA', team: { id: '1', nameShort: 'TSM', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Team_SoloMid_Logo.png' } },
      { id: '3', firstName: 'Jordan', lastName: 'Wolfe', nickName: 'Reps', country: 'USA', team: { id: '1', nameShort: 'TSM', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Team_SoloMid_Logo.png' } },
    ]);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
