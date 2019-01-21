import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnisysAngularFormGroupComponent } from './unisys-angular-form-group.component';

describe('UnisysAngularFormGroupComponent', () => {
  let component: UnisysAngularFormGroupComponent;
  let fixture: ComponentFixture<UnisysAngularFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnisysAngularFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnisysAngularFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
