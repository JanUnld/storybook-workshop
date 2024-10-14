import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'ds-link',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './link.component.css',
  template: `
    <a [href]="href()" [target]="target()" referrerpolicy="no-referrer">
      <ng-content></ng-content>
    </a>
  `,
})
export class LinkComponent {
  /** Hyper reference link to be set for the underlying {@link HTMLAnchorElement} */
  href = input<string>();
  /** Defines whether the link shall be opened in a new window tab or not */
  openInNewTab = input(false);

  target = computed(() => (this.openInNewTab() ? '_blank' : '_self'));
}
