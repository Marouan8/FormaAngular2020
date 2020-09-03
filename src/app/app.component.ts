import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formaAngular2020';
  bgColor = 'red';
  show = false;

  changeStatus() {
    this.show = !this.show;
   }
}
