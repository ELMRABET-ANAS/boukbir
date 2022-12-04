import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author, Post} from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http:HttpClient
  ) { }

  private allPostsURL = 'http://116105.bloggy.ecole-it.devigne.space/posts';
  //private allAuthorsURL = "http://116105.bloggy.ecole-it.devigne.space/authors";

  findAll():Observable<Post[]> {
    return this.http.get<Post[]>(this.allPostsURL)
  }

  findPostById(id: any):Observable<Post>{
    return this.http.get<Post>(this.allPostsURL + '/' + id)
  }

  // findAllAuthors():Observable<Author[]>{
  //   return this.http.get<Author[]>(this.allAuthorsURL)
  // }
}
