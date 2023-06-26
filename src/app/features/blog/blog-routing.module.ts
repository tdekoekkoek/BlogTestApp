import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from "./blog.component";
import { latestPostsResolver } from "./resolvers/latest-posts.resolver";

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    resolve: {loaded: latestPostsResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
