import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaNpcComponent } from './pages/lista-npc/lista-npc.component';
import { InfoNpcComponent } from './components/info-npc/info-npc.component';
import { ListaItemComponent } from './pages/lista-item/lista-item.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'npc',
    component: ListaNpcComponent,
  },
  {
    path: 'info-npc',
    component: InfoNpcComponent,
  },
  {
    path: 'item',
    component: ListaItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
