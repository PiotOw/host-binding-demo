import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-no-binding',
  templateUrl: './child-no-binding.component.html',
  styleUrls: ['./child-no-binding.component.scss']
})
export class ChildNoBindingComponent implements OnInit {

  public _blue = false;

  @Input() set blue(isBlue: boolean) {
    this._blue = isBlue;
    console.log(`[ChildNoBindingComponent] ${isBlue ? 'I\'m blue Da ba dee da ba di' : 'I\'m red'}`);
  }

  constructor() { }

  ngOnInit() {
  }

}
