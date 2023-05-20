import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sign-up3',
  templateUrl: 'sign-up3.component.html',
  styleUrls: ['sign-up3.component.css'],
})
export class SignUp3 {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('SignUp3 - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'SignUp3 - exported project',
      },
    ])
  }
}
