import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
})
export class Map {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Map - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Map - exported project',
      },
    ])
  }
}
