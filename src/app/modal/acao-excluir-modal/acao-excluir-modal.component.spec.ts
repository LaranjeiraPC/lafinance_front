import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaoExcluirModalComponent } from './acao-excluir-modal.component';

describe('AcaoExcluirModalComponent', () => {
  let component: AcaoExcluirModalComponent;
  let fixture: ComponentFixture<AcaoExcluirModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcaoExcluirModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaoExcluirModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
