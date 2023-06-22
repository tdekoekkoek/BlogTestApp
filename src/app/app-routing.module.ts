import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children   : [
      {
        path:'',
        redirectTo: 'blog',
        pathMatch: 'full'
      },
      {
        path: 'blog',
        loadChildren: () => import('./features/blog/blog.module').then(m => m.BlogModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
