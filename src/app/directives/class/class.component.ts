import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  est = false;
  milan = false;
  barca = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeTeam() {
    this.est = true;
  }

}
