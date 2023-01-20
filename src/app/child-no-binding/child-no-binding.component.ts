import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-no-binding',
  templateUrl: './child-no-binding.component.html',
  styleUrls: ['./child-no-binding.component.scss']
})
export class ChildNoBindingComponent implements OnInit {

  @Input() blue = false

  constructor() { }

  ngOnInit() {
  }

}
