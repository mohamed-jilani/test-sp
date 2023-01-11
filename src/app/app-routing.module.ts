import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { etudiantAddComponent } from './etud/etudiant-add/etudiant-add.component';
import { etudiantEditComponent } from './etud/etudiant-edit/etudiant-edit.component';
import { etudiantListComponent } from './etud/etudiant-list/etudiant-list.component';

const routes: Routes = [
  {path : "etudiants/list", component: etudiantListComponent },
  {path : "etudiants/add", component: etudiantAddComponent},
  {path : "etudiants/edit/:indice", component:etudiantEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
