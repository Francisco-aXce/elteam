import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Country } from 'src/app/models/country.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  // TODO: Review validators
  readonly signupForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    firstName: new FormControl<string>('', [Validators.required, Validators.maxLength(20)]),
    lastName: new FormControl<string>('', [Validators.required, Validators.maxLength(20)]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
    passwordConfirm: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
    country: new FormControl<string>('', [Validators.required]),
  })

  get email() { return this.signupForm.controls.email }
  get firstName() { return this.signupForm.controls.firstName }
  get lastName() { return this.signupForm.controls.lastName }
  get password() { return this.signupForm.controls.password }
  get passwordConfirm() { return this.signupForm.controls.passwordConfirm }
  get country() { return this.signupForm.controls.country }

  hidePassword = true;

  // TODO: In DB just save array with names and then use library to get codes
  readonly countries: Country[] = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'mx', name: 'Mexico' },
    { value: 'gb', name: 'United Kingdom' },
    { value: 'fr', name: 'France' },
    { value: 'de', name: 'Germany' },
    { value: 'it', name: 'Italy' },
    { value: 'es', name: 'Spain' },
    { value: 'br', name: 'Brazil' },
    { value: 'au', name: 'Australia' },
    { value: 'nz', name: 'New Zealand' },
    { value: 'jp', name: 'Japan' },
    { value: 'cn', name: 'China' },
    { value: 'in', name: 'India' },
    { value: 'ru', name: 'Russia' },
    { value: 'kr', name: 'South Korea' },
    { value: 'sa', name: 'Saudi Arabia' },
    { value: 'ae', name: 'United Arab Emirates' },
    { value: 'AR', name: 'Argentina' },
  ].sort((a, b) => a.name.localeCompare(b.name));
  filteredCountries: Observable<Country[]>;

  _filterCountries(input: any): Country[] {
    if (!input) return this.countries;
    const filterValue = input.toLowerCase();
    return this.countries.filter(country => Object.keys(country).some(key => country[key as keyof Country].toLowerCase().includes(filterValue)));
  }

  constructor() {
    this.filteredCountries = this.country.valueChanges.pipe(
      map(val => this._filterCountries(val)),
    );
  }

}
