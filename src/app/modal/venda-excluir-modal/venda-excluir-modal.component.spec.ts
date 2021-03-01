import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaExcluirModalComponent } from './venda-excluir-modal.component';

describe('VendaExcluirModalComponent', () => {
  let component: VendaExcluirModalComponent;
  let fixture: ComponentFixture<VendaExcluirModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaExcluirModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaExcluirModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
