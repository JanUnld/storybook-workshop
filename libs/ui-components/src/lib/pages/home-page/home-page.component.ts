import { Component, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BreadcrumbDirective,
  BreadcrumbsComponent,
  LinkComponent,
} from '@storybook-workshop/design-system';
import { LandingPageComponent } from '@storybook-workshop/ui-components';
import { Post, PostsService } from '../../api/posts.service';

@Component({
  selector: 'ui-home-page',
  standalone: true,
  imports: [
    CommonModule,
    LandingPageComponent,
    BreadcrumbsComponent,
    BreadcrumbDirective,
    LinkComponent,
  ],
  styleUrl: './home-page.component.css',
  template: `
    <ui-landing-page headerTitle="Storybook Workshop">
      <ds-breadcrumbs uiLandingPageHeaderContent>
        <ds-link *dsBreadcrumb>Home</ds-link>
        <ds-link *dsBreadcrumb>Landing Page</ds-link>
      </ds-breadcrumbs>
      <div uiLandingPageSpotlightContent>
        <h1 class="text-xl">Welcome to the Storybook Workshop!</h1>
        <p class="mt-2 text-neutral-600">
          This is a simple example of a home page component that fetches posts
          from an API. Ideally this API call would be offloaded into a router
          resolver of course 🫣.
        </p>
      </div>
      <div class="posts">
        @for (post of posts(); track post.id) {
        <div class="mb-6 rounded-xl border border-neutral-300 px-4 py-3">
          <div class="font-bold">{{ post.title }}</div>
          <div
            class="mt-2 text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {{ post.body }}
          </div>
        </div>
        }
      </div>
    </ui-landing-page>
  `,
})
export class HomePageComponent {
  private readonly _postsService = inject(PostsService);

  readonly posts = signal<Post[]>([]);

  async ngOnInit() {
    this.posts.set(await this._postsService.getPosts());
  }
}
