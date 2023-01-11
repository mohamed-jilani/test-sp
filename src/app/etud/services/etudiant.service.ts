import { etudiant } from '../model/etudiant.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


@Injectable({
  providedIn: 'root'
})
export class etudiantService {
  //books = new Array<Book>();
  etudiants : etudiant[];

  constructor(private _http:HttpClient) {
    console.log("Une nouvelle instance est créée")
    this.etudiants = [];
  }

  createEtudiant( nom : string, prenom : string , classe : string){
    return new etudiant(nom , prenom , classe );
  }

  getetudiants(){
    return this.etudiants;
  }

  getetudiant(indice : number){
    return this.etudiants[indice];
  }

  addetudiant(etudiant : etudiant){
    this.etudiants.push(etudiant);
    console.log(this.etudiants);
  }

  deleteEtudiant(indice : number){
    if(confirm("Êtes vous sûre de vouloir supprimer l'etudiant :" + this.etudiants[indice].nom)){
      this.etudiants.splice(indice, 1);
    }
  }

  editEtudiant(etudiant : etudiant, indiceetudiantToEdit : number){
    //Récupérer l'objet modifié afin de mettre à jour le tableau books -> le tableau HTML
    this.etudiants[indiceetudiantToEdit] = etudiant;
  }


  getstudentby(indice : number){
    return this.etudiants[indice];
  }


  getstudentSp(id : number){
    return this._http.get<any>("http://localhost:3000/posts/"+id)
  .pipe(map((res:any)=>{
    alert(res.id+" "+res.nom);
    return res;
  }))

  }
  //creat by post
  poststudent(data:any){

    return this._http.post<any>("http://localhost:3000/posts",data).
    pipe(map((res:any)=>{
      return res;
    }))
  }
//get

getstudent(){
  return this._http.get<any>("http://localhost:3000/posts")
  .pipe(map((res:any)=>{
    return res;
  }))
}


//update

updatestudent(data:any,id:number){
  return this._http.put("http://localhost:3000/posts/"+id,data)
  .pipe(map((res:any)=>{
    return res;
  }))
}


//delete

deletestudent(id:number){
  return this._http.delete<any>("http://localhost:3000/posts/"+id)
  .pipe(map((res:any)=>{
    return res;
  }))

  }


}

