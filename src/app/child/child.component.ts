import { Component, HostBinding, Input, OnInit } from '@angular/core';

type ChildPosition = 'relative' | 'top-right' | 'bottom-left'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  @HostBinding(`class`)
    position: ChildPosition = 'relative';

  constructor() { }

  ngOnInit() {
  }

}
