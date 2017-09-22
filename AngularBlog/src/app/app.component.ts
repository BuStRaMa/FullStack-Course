import { Component } from '@angular/core';
import { Post } from './Post';

import { PostService } from './services/post.service';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  providers: [PostService]
})
export class AppComponent {
  posts: Post[];
  title: string;
  body: string;

  constructor(private _postService: PostService) {
    this._postService.getPosts().then(posts => {
      this.posts = posts;
    });
  }

  addPost() {
    const newPost = {
      title: this.title,
      body: this.body
    };

    this._postService.addPost(newPost);
    return false;
  }
}
