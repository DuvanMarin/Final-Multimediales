import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'social-media',
  templateUrl: 'social-media.component.html',
  styleUrls: ['social-media.component.css'],
})
export class SocialMedia {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('SocialMedia - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'SocialMedia - exported project',
      },
    ])
  }
}
