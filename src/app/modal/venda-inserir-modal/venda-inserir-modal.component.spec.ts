import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaInserirModalComponent } from './venda-inserir-modal.component';

describe('VendaInserirModalComponent', () => {
  let component: VendaInserirModalComponent;
  let fixture: ComponentFixture<VendaInserirModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaInserirModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaInserirModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
