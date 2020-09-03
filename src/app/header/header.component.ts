import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  visibility = false;
  constructor(public authentificationService: AuthentificationService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authentificationService.logout();
  }

  show() {
    this.visibility = !this.visibility;
  }

}
