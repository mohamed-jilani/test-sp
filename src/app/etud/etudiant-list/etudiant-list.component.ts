import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { etudiant } from '../model/etudiant.model';
import { etudiantService } from '../services/etudiant.service';



@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class etudiantListComponent implements OnInit {
  etudiants !: etudiant[];

  constructor(private service : etudiantService, private router : Router) {
  this.getdata();
  }

  studentmodelobj : etudiant = new etudiant;

  allstudentdata :any;


  ngOnInit(): void {
    this.getdata();
  }




  delete(indice : number){
    this.service.deleteEtudiant(indice);
  }

  edit(etudiant : any){
    //rediriger l'utilisateur vers le formulaire d'edit
    console.log(etudiant);
    this.router.navigate(['/etudiants', 'edit', etudiant.id]);
  }

  //getdata

getdata(){
  this.service.getstudent()
  .subscribe(res=>{
    this.allstudentdata=res;
  })
}

//deletestudent
deletestudent(data :any){
  if(confirm('Are yous sure to delete ?'))
  this.service.deletestudent(data.id)
  .subscribe(res=>{
    alert("deleted sucessfully");
    this.getdata();
  })
}


}
