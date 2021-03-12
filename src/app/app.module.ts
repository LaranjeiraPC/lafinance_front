
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
import { MatInputModule, MatDatepickerModule, MatNativeDateModule, MatTableModule, MatSortModule, MatButtonModule, MatTabsModule, MatButtonToggleModule, MatCheckboxModule, MatIconModule, MatTooltipModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PainelMensagemComponent } from './default/painel-mensagem/painel-mensagem.component';
import { AcaoExcluirModalComponent } from './modal/acao-excluir-modal/acao-excluir-modal.component';
import { InvestimentosComponent } from './pages/investimentos/investimentos.component';
import { CompraInserirModalComponent } from './modal/compra-inserir-modal/compra-inserir-modal.component';
import { CompraEditarModalComponent } from './modal/compra-editar-modal/compra-editar-modal.component';
import { CompraExcluirModalComponent } from './modal/compra-excluir-modal/compra-excluir-modal.component';
import { VendaInserirModalComponent } from './modal/venda-inserir-modal/venda-inserir-modal.component';
import { VendaEditarModalComponent } from './modal/venda-editar-modal/venda-editar-modal.component';
import { VendaExcluirModalComponent } from './modal/venda-excluir-modal/venda-excluir-modal.component';
import { CardComponent } from './default/card/card.component';
import { DataBRPipe } from './pipe/data-br.pipe';
import { MoedaPipe } from './pipe/moeda.pipe';

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
    InvestimentosComponent,
    CompraInserirModalComponent,
    CompraEditarModalComponent,
    CompraExcluirModalComponent,
    VendaInserirModalComponent,
    VendaEditarModalComponent,
    VendaExcluirModalComponent,
    CardComponent,
    DataBRPipe,
    MoedaPipe,
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatTabsModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  providers: [MoedaPipe],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [
    AcaoInserirModalComponent,
    AcaoExcluirModalComponent,
    CompraInserirModalComponent,
    CompraEditarModalComponent,
    CompraExcluirModalComponent]
})
export class AppModule { }
