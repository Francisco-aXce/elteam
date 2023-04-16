import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from 'src/app/components/core/navbar/navbar.component';

@Component({
  selector: 'app-platform',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,

    NavbarComponent,
  ],
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent {

}
