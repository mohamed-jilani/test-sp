import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { etudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-etudiant-add',
  templateUrl: './etudiant-add.component.html',
  styleUrls: ['./etudiant-add.component.css']
})
export class etudiantAddComponent implements OnInit {

  constructor(
    private service : etudiantService,
    private router : Router) { }

  addstudent(f : NgForm){
    let etudiant = this.service.createEtudiant(f.value.nom, f.value.prenom, f.value.class);
    this.service.addetudiant(etudiant);
    this.router.navigate(['/etudiants', 'list']);

    this.service.poststudent(etudiant).subscribe(res=>{
      console.log(res)
      alert("Record added sucessfully");
    },
    err=>{
      alert("something are wrong!!!");
    })
  }


  ngOnInit(): void {
  }

}
