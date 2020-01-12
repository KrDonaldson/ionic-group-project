import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(public _route: Router) { }

  ngOnInit() {
  }

  goHome() {
    this._route.navigate(['/home'])
  }

}
