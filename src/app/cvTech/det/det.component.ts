import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../../models/personne';

@Component({
  selector: 'app-det',
  templateUrl: './det.component.html',
  styleUrls: ['./det.component.scss']
})
export class DetComponent implements OnInit {
  personne: Personne;
  constructor(private cvService: CvService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cvService.getPersonneById(params.id).subscribe(
          (personne) => {
            this.personne = personne;
          }
        );
      }

    );
  }

  deletePersonne(){
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (reponse) =>  {
        const link = ['cv'];
        this.router.navigate(link);
      }
    );
  }
  updatePersonne(id:number) {
   const link = ['cv/updatecv',id];
   this.router.navigate(link);
  }

}
