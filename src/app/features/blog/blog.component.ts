import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { Post } from "../../core/model/post.model";
import { Store } from "@ngrx/store";
import { RootState } from "../../store/app/app.reducer";
import { BlogSelectors, selectBlogState } from "../../store/blog/blog.selectors";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  posts$: Observable<Array<Post>>;

  constructor(private store: Store<RootState>) {
    this.posts$= this.store.select(BlogSelectors.selectLatestPosts$)
  }


}
