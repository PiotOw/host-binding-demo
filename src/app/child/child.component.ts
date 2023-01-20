import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @HostBinding(`class.blue`)
  private _blue = false;

  @Input() set blue(isBlue: boolean) {
    this._blue = isBlue;
    console.log(`[ChildComponent] ${isBlue ? 'I\'m blue Da ba dee da ba di' : 'I\'m red'}`);
  }

  constructor() { }

  ngOnInit() {
  }

}
