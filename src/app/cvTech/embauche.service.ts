import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  personnes: Personne[];
  constructor() {
    this.personnes = [];
   }

  getEmbauchees(): Personne[] {
    return this.personnes;
  }

  embaucher(personne: Personne) : void {
    const index = this.personnes.indexOf(personne);
    if(index < 0) {
      this.personnes.push(personne);
    } else {
      alert(`${personne.name} est déjà sélectionée`);
    }
  }

  debaucher(personne: Personne): void {
    const index = this.personnes.indexOf(personne);
    if(index >= 0) {
      this.personnes.slice(index,1);
    }
  }
}
