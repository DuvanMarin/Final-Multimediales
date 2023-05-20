import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-privacy',
  templateUrl: 'privacy.component.html',
  styleUrls: ['privacy.component.css'],
})
export class Privacy {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Privacy - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Privacy - exported project',
      },
    ])
  }
}
