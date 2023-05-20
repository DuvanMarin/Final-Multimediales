import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { CourseContent } from './course-content.component'

const routes = [
  {
    path: '',
    component: CourseContent,
  },
]

@NgModule({
  declarations: [CourseContent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [CourseContent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CourseContentModule {}
