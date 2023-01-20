import { Component, Input, OnInit } from '@angular/core';

type ChildVariant = 'gradient' | 'warn' | 'success'
type ChildBackgroundGradientVariant = 'happy' | 'sad'

@Component({
  selector: 'app-child-no-binding',
  templateUrl: './child-no-binding.component.html',
  styleUrls: ['./child-no-binding.component.scss']
})
export class ChildNoBindingComponent implements OnInit {

  @Input() variant: ChildVariant = 'gradient'
  @Input() backgroundGradientVariant: ChildBackgroundGradientVariant = 'sad'

  constructor() { }

  ngOnInit(): void {
  }

}
