import { Component, HostBinding, Input, OnInit } from '@angular/core';

type ChildType = 'full' | 'inline'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  @HostBinding(`class`)
    type: ChildType = 'full';

  constructor() { }

  ngOnInit() {
  }

}
