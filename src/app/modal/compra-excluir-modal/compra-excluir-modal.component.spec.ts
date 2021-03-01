import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraExcluirModalComponent } from './compra-excluir-modal.component';

describe('CompraExcluirModalComponent', () => {
  let component: CompraExcluirModalComponent;
  let fixture: ComponentFixture<CompraExcluirModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraExcluirModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraExcluirModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
