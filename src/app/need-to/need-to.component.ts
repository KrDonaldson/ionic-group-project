import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-need-to',
  template: '<h1>I need to do this! {{todo}}</h1>',
  styleUrls: ['./need-to.component.scss'],
})
export class NeedToComponent implements OnInit {
  
  @Input() todo: string;

  constructor() { }

  ngOnInit() {}

}
