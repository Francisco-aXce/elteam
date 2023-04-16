import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/components/core/navbar/navbar.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule,

    NavbarComponent,
  ],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

}
