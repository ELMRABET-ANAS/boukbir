import { Component, OnInit } from '@angular/core';
import {Author, Post} from "../models/Post";
import {Router} from "@angular/router";
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  posts:Post[] = [];
  authors:Author[] = [];
  router!: Router;

  constructor(
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

}
