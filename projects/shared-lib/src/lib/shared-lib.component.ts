import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared-lib',
  template: `
  <h1>Shared</h1>
  <lib-auth-lib></lib-auth-lib>
  `,
  styles: [
  ]
})
export class SharedLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
