import { Directive, Input, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @Input('appHighlight')
  private highlightColor: string

  @HostListener('mouseleave')
  mouseleave() {
    this.highlight(null)
  }

  @HostListener('mouseenter')
  mouseenter() {
    this.highlight(this.highlightColor || 'yellow')
  }

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }

}
