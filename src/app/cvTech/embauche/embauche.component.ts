import { Component, OnInit } from '@angular/core';
import { Personne } from '../../models/personne';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.scss']
})
export class EmbaucheComponent implements OnInit {
  personnes: Personne[];
  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
   this.personnes =  this.embaucheService.getEmbauchees();
  }

}
