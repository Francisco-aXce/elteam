import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthMethod } from 'src/app/models/auth.models';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-alternatives-auth-methods',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatButtonModule,
  ],
  templateUrl: './alternatives-auth-methods.component.html',
  styleUrls: ['./alternatives-auth-methods.component.scss']
})
export class AlternativesAuthMethodsComponent {

  readonly icons = {
    google: faGoogle,
  };

  // TODO: This should be in a service
  readonly methods: AuthMethod[] = [
    {
      name: 'Google',
      icon: this.icons.google,
    }
  ];

}
