import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-more',
  templateUrl: 'more.component.html',
  styleUrls: ['more.component.css'],
})
export class More {
  raw5rll: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('More - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'More - exported project',
      },
    ])
  }
}
