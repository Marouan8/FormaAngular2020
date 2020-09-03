import { Component, OnInit } from '@angular/core';
import { Personne } from '../../models/personne';
import { PremierService } from '../../premier.service';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  personnes: Personne[];
  selectedPersonne: Personne;
  constructor( private cvService : CvService) { }

  ngOnInit(): void {
     this.cvService.getPersonnes().subscribe(
       (personnes) => {
         this.personnes = personnes ;
       },
       (error) => {
         alert('les données sont fakes');
         this.personnes = this.cvService.getFakePersonnes();
       }
     );
    
  }

  selectPersonne(personne){
    this.selectedPersonne = personne;
  }

}
