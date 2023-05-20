import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'course-view',
  templateUrl: 'course-view.component.html',
  styleUrls: ['course-view.component.css'],
})
export class CourseView {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('CourseView - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CourseView - exported project',
      },
    ])
  }
}
