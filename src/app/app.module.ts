import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DroplistComponent } from './components/droplist/droplist.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoNpcComponent } from './components/info-npc/info-npc.component';
import { ListaItemComponent } from './pages/lista-item/lista-item.component';
import { ListaNpcComponent } from './pages/lista-npc/lista-npc.component';
import { ListaSkillComponent } from './pages/lista-skill/lista-skill.component';
import { InfoSkillComponent } from './components/info-skill/info-skill.component';
import { ListaNpcSkillComponent } from './components/lista-npc-skill/lista-npc-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaNpcComponent,
    InfoNpcComponent,
    ListaItemComponent,
    DroplistComponent,
    ListaSkillComponent,
    InfoSkillComponent,
    ListaNpcSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
