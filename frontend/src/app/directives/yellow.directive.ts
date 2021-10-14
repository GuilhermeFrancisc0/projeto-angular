import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appYellow]'
})
export class YellowDirective {

  constructor(private el: ElementRef) {
    // Diretiva de atributo : capaz de mexer na parte de comportamento e estilo 
    el.nativeElement.style.color = '#face3c';
  }
}
