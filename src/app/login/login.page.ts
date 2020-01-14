import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public _route: Router) { }

  ngOnInit() {
  }

  goHome() {
    this._route.navigate(['/todos'])
  }

}
