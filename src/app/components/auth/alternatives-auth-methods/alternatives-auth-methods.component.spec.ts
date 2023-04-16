import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativesAuthMethodsComponent } from './alternatives-auth-methods.component';

describe('AlternativesAuthMethodsComponent', () => {
  let component: AlternativesAuthMethodsComponent;
  let fixture: ComponentFixture<AlternativesAuthMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AlternativesAuthMethodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlternativesAuthMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
