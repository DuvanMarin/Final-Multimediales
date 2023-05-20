import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SignUp2 } from './sign-up2.component'

const routes = [
  {
    path: '',
    component: SignUp2,
  },
]

@NgModule({
  declarations: [SignUp2],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SignUp2],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignUp2Module {}
