export class etudiant {
  nom : string;
  prenom : string;
  classe : string;

  constructor(nom : string = "", prenom : string = "", classe : string = ""){
    this.nom = nom;
    this.prenom = prenom;
    this.classe = classe;
  }

}
