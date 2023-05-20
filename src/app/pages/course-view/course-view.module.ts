import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { CourseView } from './course-view.component'

const routes = [
  {
    path: '',
    component: CourseView,
  },
]

@NgModule({
  declarations: [CourseView],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [CourseView],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CourseViewModule {}
