import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { Post } from "../../core/model/post.model";
import { BlogService } from "../../core/services/blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  posts: Observable<Array<Post>> | undefined;

  constructor(private blogService: BlogService) {
    this.posts = blogService.fetchPosts();
  }


  ngOnInit() {
  }

}
