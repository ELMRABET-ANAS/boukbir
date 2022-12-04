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
  title = 'userApp';
  familyName:any;
  firstName:any;
  posts:Post[] = [];
  authors:Author[] = [];
  router!: Router;

  constructor(
    private postsService:PostsService,
  ) {
  }

  ngOnInit(): void {
    this.postsService.findAll().subscribe(allPosts => {
      this.posts = allPosts;
    })

    // this.postsService.findAllAuthors().subscribe(allAuthors => {
    //   this.authors = allAuthors
    //   console.warn(this.authors)
    // })
  }

  navigateToPost(){
    this.router.navigateByUrl('/post');
  }


}
