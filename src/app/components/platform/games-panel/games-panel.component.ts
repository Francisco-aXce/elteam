import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { BasicGame } from 'src/app/models/games.model';

@Component({
  selector: 'app-games-panel',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    FontAwesomeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './games-panel.component.html',
  styleUrls: ['./games-panel.component.scss']
})
export class GamesPanelComponent implements AfterViewInit {

  readonly gamepad = faGamepad;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  columns: string[] = ['game', 'releaseDate'];
  dataSource: MatTableDataSource<BasicGame>;

  constructor() {
    this.dataSource = new MatTableDataSource<BasicGame>([
      { id: '1', name: 'Apex Legends', releaseDate: new Date('2019-02-04'), logo: 'https://logodownload.org/wp-content/uploads/2019/02/apex-legends-logo-1.png' },
      { id: '2', name: 'Counter-Strike: Global Offensive', releaseDate: new Date('2012-08-21'), logo: 'https://seeklogo.com/images/C/csgo-logo-CAA0A4D48A-seeklogo.com.png' },
      { id: '3', name: 'Valorant', releaseDate: new Date('2020-04-02'), logo: 'https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png' },
    ]);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
