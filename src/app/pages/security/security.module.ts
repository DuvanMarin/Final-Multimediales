import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Security } from './security.component'

const routes = [
  {
    path: '',
    component: Security,
  },
]

@NgModule({
  declarations: [Security],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Security],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SecurityModule {}
