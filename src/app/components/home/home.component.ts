import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  coins = [] = [{id: 1, title: 'ads'}];

  constructor() {
  }

  ngOnInit(): void {
  }

}
