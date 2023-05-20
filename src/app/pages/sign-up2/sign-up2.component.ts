import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sign-up2',
  templateUrl: 'sign-up2.component.html',
  styleUrls: ['sign-up2.component.css'],
})
export class SignUp2 {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('SignUp2 - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'SignUp2 - exported project',
      },
    ])
  }
}
