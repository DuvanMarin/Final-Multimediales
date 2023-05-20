import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Settings } from './settings.component'

const routes = [
  {
    path: '',
    component: Settings,
  },
]

@NgModule({
  declarations: [Settings],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Settings],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SettingsModule {}
