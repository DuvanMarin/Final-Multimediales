import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-security',
  templateUrl: 'security.component.html',
  styleUrls: ['security.component.css'],
})
export class Security {
  rawgxpn: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Security - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Security - exported project',
      },
    ])
  }
}
