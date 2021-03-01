import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraInserirModalComponent } from './compra-inserir-modal.component';

describe('CompraInserirModalComponent', () => {
  let component: CompraInserirModalComponent;
  let fixture: ComponentFixture<CompraInserirModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraInserirModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraInserirModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
