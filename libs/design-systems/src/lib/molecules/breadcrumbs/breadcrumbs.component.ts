import {
  Component,
  contentChildren,
  Directive,
  inject,
  input,
  TemplateRef,
  viewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[dsBreadcrumb]',
  standalone: true,
})
export class BreadcrumbDirective {
  readonly templateRef = inject(TemplateRef);
}

@Component({
  selector: 'ds-breadcrumbs',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './breadcrumbs.component.css',
  template: `
    @for (crumb of breadcrumbs(); track crumb) {
    <ng-container *ngTemplateOutlet="crumb.templateRef"></ng-container>
    @if (!$last) {
    <span class="text-gray-300 mx-3">{{ separator() }}</span>
    } }
  `,
})
export class BreadcrumbsComponent {
  readonly breadcrumbs = contentChildren(BreadcrumbDirective);

  separator = input<string>('/');
}
