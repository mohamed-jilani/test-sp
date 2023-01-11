import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { etudiant } from '../model/etudiant.model';
import { etudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-etudiant-edit',
  templateUrl: './etudiant-edit.component.html',
  styleUrls: ['./etudiant-edit.component.css']
})
export class etudiantEditComponent implements OnInit {
  etudiant :any;
  indice : number=0;

  constructor(
    private route : ActivatedRoute,
    private service : etudiantService,
    private router : Router
    ) { }

  edit(f : NgForm){
    console.log(f);
    let etudiant = this.service.createEtudiant(f.value.nom, f.value.prenom, f.value.class);
    this.service.updatestudent(etudiant, this.indice);
    this.router.navigate(['/etudiants', 'list']);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.indice = params['indice'];
        this.etudiant =this.service.getstudentSp(this.indice);
      }
    )
  }

}
