import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraEditarModalComponent } from './compra-editar-modal.component';

describe('CompraEditarModalComponent', () => {
  let component: CompraEditarModalComponent;
  let fixture: ComponentFixture<CompraEditarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraEditarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraEditarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
