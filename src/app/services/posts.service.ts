import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author, Post} from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http:HttpClient
  ) { }

  private postsURL = 'http://116105.bloggy.ecole-it.devigne.space/posts';
  private allAuthorsURL = "http://116105.bloggy.ecole-it.devigne.space/authors";
  private postDeleteURL = 'http://116105.bloggy.ecole-it.devigne.space/post'

  findAll():Observable<Post[]> {
    return this.http.get<Post[]>(this.postsURL)
  }

  findPostById(id: any):Observable<Post>{
    return this.http.get<Post>(this.postsURL + '/' + id);
  }

  findAllAuthors():Observable<Author[]>{
    return this.http.get<Author[]>(this.allAuthorsURL)
  }

  addPost(post:Post):Observable<Post>{
    return this.http.post<Post>(this.postsURL,post)
  }

  deletePost(id: any){
    return this.http.delete<Post>(this.postDeleteURL + '/' + id)
  }

}
