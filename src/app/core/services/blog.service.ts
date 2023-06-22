import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../model/post.model";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  serviceRootUri = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  fetchPosts(): Observable<Array<Post>> {
    const uri = this.serviceRootUri + 'posts';
    return this.http.get<Array<Post>>(uri);
  }

}
