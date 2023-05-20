import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SocialMedia } from './social-media.component'

const routes = [
  {
    path: '',
    component: SocialMedia,
  },
]

@NgModule({
  declarations: [SocialMedia],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SocialMedia],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SocialMediaModule {}
