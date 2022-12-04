import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from "../services/posts.service";
import {Post} from "../models/Post";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post!:Post;
  id!:any

  constructor(
    private postsService: PostsService,
    private route:ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(value=>{
      this.id = value
      this.postsService.findPostById(this.id.id).subscribe(post => {
        this.post = post
        console.warn(post)
      })
    })
  }

}
