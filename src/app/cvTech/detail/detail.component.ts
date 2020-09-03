import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../../models/personne';
import { EmbaucheService } from '../embauche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne;
  constructor(private embaucheService: EmbaucheService, private router: Router) { }

  ngOnInit(): void {
  }

  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }

  moreInfo() {
    const link =['cv',this.personne.id];
    this.router.navigate(link);
  }

}
