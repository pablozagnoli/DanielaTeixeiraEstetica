import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthgoogleComponent } from './oauthgoogle.component';

describe('OauthgoogleComponent', () => {
  let component: OauthgoogleComponent;
  let fixture: ComponentFixture<OauthgoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OauthgoogleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OauthgoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
