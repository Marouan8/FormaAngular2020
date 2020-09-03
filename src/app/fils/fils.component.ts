import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.scss']
})
export class FilsComponent implements OnInit {
  @Input() filsProperty;
  @Output() send = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendEvent(){
    this.send.emit('please can i have some money');
  }
}
