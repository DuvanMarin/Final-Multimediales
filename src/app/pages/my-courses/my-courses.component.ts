import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'my-courses',
  templateUrl: 'my-courses.component.html',
  styleUrls: ['my-courses.component.css'],
})
export class MyCourses {
  rawpqad: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('MyCourses - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'MyCourses - exported project',
      },
    ])
  }
}
