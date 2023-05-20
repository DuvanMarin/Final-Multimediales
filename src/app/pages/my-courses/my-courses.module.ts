import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { MyCourses } from './my-courses.component'

const routes = [
  {
    path: '',
    component: MyCourses,
  },
]

@NgModule({
  declarations: [MyCourses],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [MyCourses],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyCoursesModule {}
