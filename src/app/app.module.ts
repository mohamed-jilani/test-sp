import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { etudiantListComponent } from './etud/etudiant-list/etudiant-list.component';
import { etudiantAddComponent } from './etud/etudiant-add/etudiant-add.component';
import { MonnaiePipe } from './etud/pipes/monnaie.pipe';
import { etudiantEditComponent } from './etud/etudiant-edit/etudiant-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    etudiantListComponent,
    etudiantAddComponent,
    MonnaiePipe,
    etudiantEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
