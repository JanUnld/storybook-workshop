import { HttpClient } from '@angular/common/http';
import { inject, Injectable, InjectionToken } from '@angular/core';
import { lastValueFrom } from 'rxjs';

export const POSTS_BASE_URL = new InjectionToken('POSTS_BASE_URL', {
  providedIn: 'root',
  factory: () => 'https://jsonplaceholder.typicode.com/posts',
});

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class PostsService {
  readonly http = inject(HttpClient);
  readonly baseUrl = inject(POSTS_BASE_URL);

  getPosts() {
    return lastValueFrom(this.http.get<Post[]>(this.baseUrl));
  }
}
