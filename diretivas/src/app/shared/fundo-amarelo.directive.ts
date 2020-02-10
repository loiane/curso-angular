import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
    ) { 
    //console.log(this._elementRef);
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    //console.log(this._elementRef);
//this._elementRef.nativeElement.style.backgroundColor = 'yellow';
this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  }

}
