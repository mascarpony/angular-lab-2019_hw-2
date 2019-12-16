import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[BorderChangeDirective]'
})
export class BorderChangeDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }

  @HostListener('mouseenter', ['$event'])
  onMouseOver(event: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'border', '2px solid blue');
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'border', 'none');
  }

}