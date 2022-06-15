
import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.scss']
})
export class FlightsSearchComponent implements OnInit {

  constructor(protected service: AuthLibService) {
    console.log('User Name', this.service.user);
   }

  ngOnInit(): void {
  }

}
