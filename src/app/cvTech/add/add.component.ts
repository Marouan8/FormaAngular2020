import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private cvService: CvService, private router: Router) { }

  ngOnInit(): void {
  }

  addPersonne(formulaire: NgForm){
    this.cvService.addPersonne(formulaire.value).subscribe( 
      (reponse) => {
    const link =  ['cv'];
    this.router.navigate(link);
      },
      (error) => {
        console.log(error);
      }
    );
    
  }

}
