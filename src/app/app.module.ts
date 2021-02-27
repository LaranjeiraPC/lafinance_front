import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { ValidacaoComponent } from './validacao/validacao.component';
import { HttpClientModule } from '@angular/common/http';
import { TopoComponent } from './pages/topo/topo.component';
import { MenusComponent } from './default/menu/menus.component';
import { AcaoComponent } from './pages/acao/acao.component';
import { TableComponent } from './default/table/table.component';
import { SpinnerComponent } from './default/spinner/spinner/spinner.component';
import { ButtonPainelComponent } from './default/button-painel/button-painel.component';
import { AcaoInserirModalComponent } from './modal/acao-inserir-modal/acao-inserir-modal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule, MatTableModule, MatSortModule, MatButtonModule, MatTabsModule, MatButtonToggleModule, MatCheckboxModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { PainelMensagemComponent } from './default/painel-mensagem/painel-mensagem.component';
import { AcaoExcluirModalComponent } from './modal/acao-excluir-modal/acao-excluir-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    ValidacaoComponent,
    DashboardComponent,
    MenusComponent,
    AcaoComponent,
    TableComponent,
    SpinnerComponent,
    ButtonPainelComponent,
    AcaoInserirModalComponent,
    PainelMensagemComponent,
    AcaoExcluirModalComponent,
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,

    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [
    AcaoInserirModalComponent,
    AcaoExcluirModalComponent]
})
export class AppModule { }
