import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'payment-methods',
  templateUrl: 'payment-methods.component.html',
  styleUrls: ['payment-methods.component.css'],
})
export class PaymentMethods {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('PaymentMethods - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'PaymentMethods - exported project',
      },
    ])
  }
}
