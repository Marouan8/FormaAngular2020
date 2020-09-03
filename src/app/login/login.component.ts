import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authentificationService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
  }

  login(credentials){
    this.authentificationService.login(credentials).subscribe(
      (reponse) => {;
        const link = ['cv'];
        localStorage.setItem('token',reponse['id']);
        this.router.navigate(link);
      }
    );
  }

}
