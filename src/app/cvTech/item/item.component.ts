import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../../models/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() selectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  selectPersonne(){
    this.selectedPersonne.emit(this.personne);
  }
}
