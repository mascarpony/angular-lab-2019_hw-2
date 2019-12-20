import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductcardHover]'
})
export class ProductcardHoverDirective {
  @HostBinding('style.box-shadow') boxshadow: string;

  @HostListener('mouseover') onMouseOver() {
      this.boxshadow = '0 0 6px blue';
  }
  @HostListener('mouseout') onMouseOut() {
    this.boxshadow = '0 0 0 0';
  }

  constructor() { }

}
