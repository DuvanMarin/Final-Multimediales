import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.css'],
})
export class SignUp {
  raw2ytm: string = ' '
  rawcz0w: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('SignUp - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'SignUp - exported project',
      },
    ])
  }
}
