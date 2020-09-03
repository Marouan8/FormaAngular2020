import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../../models/personne';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  @Input() personnes : Personne[];
  @Output() selectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectPersonne(selectPersonne){
    this.selectedPersonne.emit(selectPersonne);
  }

}
