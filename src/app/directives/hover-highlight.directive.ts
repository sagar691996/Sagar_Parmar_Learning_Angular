import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {

  @Input() appHoverHighlight = ''; 

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHoverHighlight || 'yellow'); // Default hover color
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.appHoverHighlight || 'red'); // Default leave color
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  }

