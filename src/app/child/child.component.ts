import { Component, HostBinding, Input, OnInit } from '@angular/core';

type ChildVariant = 'gradient' | 'warn' | 'success'
type ChildBackgroundGradientVariant = 'happy' | 'sad'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() variant: ChildVariant = 'gradient';
  @Input() backgroundGradientVariant: ChildBackgroundGradientVariant = 'sad'

  @HostBinding('class') get hostClass(): string[] {
    return [
      this.variant,
      this.backgroundGradientVariant,
    ].filter(Boolean)
  }

  constructor() { }

  ngOnInit() {
  }

}
