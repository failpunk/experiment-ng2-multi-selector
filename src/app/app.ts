import { Component, OnInit } from '@angular/core';
import SelectorGenerator from './selector.helper';


@Component({
  selector: 'app',
  template: `
  <p>Hello Angular Universal App</p>
  <router-outlet></router-outlet>
  `,
})
export class App {

}


@Component({
  selector: 'home',
  template: `
    <splat-list></splat-list>
    <one-list></one-list>
    <cbr-list></cbr-list>
    <ppc-list></ppc-list>
  `
})
export class Home {

}


@Component({
  selector: SelectorGenerator('list'),
  template: `
    <h3>List Component</h3>

    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </ul>
  `,
  styles: [`
    h3 {
      font-size: 16px;
    }
  `]
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
