import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SignUp } from './sign-up.component'

const routes = [
  {
    path: '',
    component: SignUp,
  },
]

@NgModule({
  declarations: [SignUp],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SignUp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignUpModule {}
