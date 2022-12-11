import { Component, OnInit } from '@angular/core';
import {Author, Post} from "../../models/Post";
import {Router} from "@angular/router";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{

  posts:Post[] = [];
  authors:Author[] = [];

  constructor(
    private router : Router,
    private postsService:PostsService,
  ) {
  }

  ngOnInit(): void {
    this.postsService.findAllAuthors().subscribe(authors => {
      this.authors = authors
      this.postsService.findAll().subscribe(allPosts => {
        this.posts = allPosts;
        this.posts.forEach(post => {
          this.authors.find((author) => {
            if (author.id === post.author_id) {
              post.authorName = author.full_name
            }
          });
        })
      })
    })
  }

  toPostForm(){
    this.router.navigateByUrl('/admin/createPost');
  }

  deletePost(id:number){
    this.postsService.deletePost(id).subscribe(() => {
      console.warn('Delete successful')
    })
  }

  toModify(id:number){
    console.warn(id)
  }

}
