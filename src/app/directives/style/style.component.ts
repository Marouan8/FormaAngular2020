import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {
  @Input() color;
  @Input() bgColor;
  size = '25px';
  constructor() { }

  ngOnInit(): void {
  }

  changeSize(input){
    this.size = input + 'px';
  }

}
