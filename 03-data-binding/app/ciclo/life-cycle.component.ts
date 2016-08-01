import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'lifecycle',
  template: `
    <p #variavelLocalP >{{valorInicial}}</p>
    <p>{{ variavelLocalP.textContent }}</p>
  `,
})
export class LifeCycleComponent implements OnChanges, OnInit,
    DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy  {

      @Input() valorInicial = 10;

      @ViewChild('variavelLocalP') variavelLocalP : HTMLElement;

      constructor() {
        this.log('constructor');
        console.log(this.variavelLocalP);
      }

      ngOnChanges() {
        this.log('ngOnChanges');
        console.log(this.variavelLocalP);
      }

      ngOnInit() {
        this.log('ngOnInit');
        console.log(this.variavelLocalP);
      }

      ngDoCheck() {
        this.log('ngDoCheck');
      }

      ngAfterContentInit() {
        this.log('ngAfterContentInit');
      }

      ngAfterContentChecked() {
        this.log('ngAfterContentChecked');
        console.log(this.variavelLocalP);
      }

      ngAfterViewInit() {
        this.log('ngAfterViewInit');
      }

      ngAfterViewChecked() {
        this.log('ngAfterViewChecked');
        console.log(this.variavelLocalP);
      }

      ngOnDestroy() {
        this.log('ngOnDestroy');
      }

      private log(hook: string) {
        console.log(hook);
      }
}
