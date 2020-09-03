import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  color='red';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.color = params['default'];
      }
    );
  }

  get(message: string){
    alert(message);
  }

  goToCv(){
    const link = ['cv'];
    this.router.navigate(link);
  }
}
