import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'course-content',
  templateUrl: 'course-content.component.html',
  styleUrls: ['course-content.component.css'],
})
export class CourseContent {
  rawhz7y: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('CourseContent - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CourseContent - exported project',
      },
    ])
  }
}
