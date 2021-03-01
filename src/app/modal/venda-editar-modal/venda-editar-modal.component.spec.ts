import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaEditarModalComponent } from './venda-editar-modal.component';

describe('VendaEditarModalComponent', () => {
  let component: VendaEditarModalComponent;
  let fixture: ComponentFixture<VendaEditarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaEditarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaEditarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
