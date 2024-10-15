import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-header',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './header.component.css',
  template: `
    <div class="title">{{ title() }}</div>
    <ng-content></ng-content>
  `,
})
export class HeaderComponent {
  title = input.required<string>();
}
