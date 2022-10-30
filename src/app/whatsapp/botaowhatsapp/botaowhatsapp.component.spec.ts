import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaowhatsappComponent } from './botaowhatsapp.component';

describe('BotaowhatsappComponent', () => {
  let component: BotaowhatsappComponent;
  let fixture: ComponentFixture<BotaowhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaowhatsappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaowhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
