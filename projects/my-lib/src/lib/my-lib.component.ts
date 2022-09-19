import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-component-title',
  template: `
    <title></title>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
