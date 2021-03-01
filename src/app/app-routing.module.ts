import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcaoComponent } from './pages/acao/acao.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InvestimentosComponent } from './pages/investimentos/investimentos.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'acao', component: AcaoComponent},
  { path: 'investimentos', component: InvestimentosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
