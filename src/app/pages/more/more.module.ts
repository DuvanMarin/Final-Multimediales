import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { More } from './more.component'

const routes = [
  {
    path: '',
    component: More,
  },
]

@NgModule({
  declarations: [More],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [More],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MoreModule {}
