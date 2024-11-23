import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';
@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective{
  @Input() appHighlightOnFocus = ''; 
  @Input() appHighlightOnBlur = ''; 

  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus() {
    this.highlight(this.appHighlightOnFocus || 'yellow'); // Default focus color
  }

  @HostListener('blur') onBlur() {
    this.highlight(this.appHighlightOnBlur || 'red'); // Default blur color
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}