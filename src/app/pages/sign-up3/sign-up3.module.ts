import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SignUp3 } from './sign-up3.component'

const routes = [
  {
    path: '',
    component: SignUp3,
  },
]

@NgModule({
  declarations: [SignUp3],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SignUp3],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignUp3Module {}
