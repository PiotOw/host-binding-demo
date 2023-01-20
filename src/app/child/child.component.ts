import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  @HostBinding(`class.blue`)
  blue = false

  constructor() { }

  ngOnInit() {
  }

}
