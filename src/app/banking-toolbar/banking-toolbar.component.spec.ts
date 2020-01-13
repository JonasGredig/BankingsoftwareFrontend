import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingToolbarComponent } from './banking-toolbar.component';

describe('BankingToolbarComponent', () => {
  let component: BankingToolbarComponent;
  let fixture: ComponentFixture<BankingToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
