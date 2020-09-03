import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../cv.service';
import { Personne } from '../../models/personne';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  personne : Personne = null;
  constructor(private activatedRoute: ActivatedRoute, private cvService: CvService, private router: Router) { }

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
  updatePersonne(){
    this.cvService.updatePersonne(this.personne).subscribe(
      (reponse) => {
        const link = ['cv'];
        this.router.navigate(link);
      }
    );
  }

}
