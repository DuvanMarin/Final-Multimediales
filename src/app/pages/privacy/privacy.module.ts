import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Privacy } from './privacy.component'

const routes = [
  {
    path: '',
    component: Privacy,
  },
]

@NgModule({
  declarations: [Privacy],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Privacy],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrivacyModule {}
