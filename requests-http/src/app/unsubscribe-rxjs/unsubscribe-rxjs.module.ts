import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsubscribeRxjsRoutingModule } from './unsubscribe-rxjs-routing.module';
import { UnsubscribePocComponent } from './unsubscribe-poc/unsubscribe-poc.component';
import { PocComponent } from './componentes/poc.component';
import { PocAsyncComponent } from './componentes/poc-async.component';
import { PocTakeUntilComponent } from './componentes/poc-take-until.component';
import { PocTakeComponent } from './componentes/poc-take.component';
import { PocUnsubComponent } from './componentes/poc-unsub.component';
import { PocBaseComponent } from './poc-base/poc-base.component';

@NgModule({
  imports: [
    CommonModule,
    UnsubscribeRxjsRoutingModule
  ],
  declarations: [
    UnsubscribePocComponent,
    PocComponent,
    PocAsyncComponent,
    PocTakeUntilComponent,
    PocTakeComponent,
    PocUnsubComponent,
    PocBaseComponent
  ]
})
export class UnsubscribeRxjsModule {}
