import { Component } from '@angular/core';

import { DataBindingComponent } from './data-binding/data-binding.component';

@Component({
    selector: 'my-app',
    template: `
        <exemplo-data-binding></exemplo-data-binding>
    `,
    directives: [DataBindingComponent]
})
export class AppComponent { }
