import { Component } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  constructor() {}
  helloWorld() {
    alert('Hello world!');
}
}
