import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryPersonComponent } from './registry-person.component';

describe('RegistryPersonComponent', () => {
  let component: RegistryPersonComponent;
  let fixture: ComponentFixture<RegistryPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistryPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistryPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
