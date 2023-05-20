import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { PaymentMethods } from './payment-methods.component'

const routes = [
  {
    path: '',
    component: PaymentMethods,
  },
]

@NgModule({
  declarations: [PaymentMethods],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [PaymentMethods],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PaymentMethodsModule {}
