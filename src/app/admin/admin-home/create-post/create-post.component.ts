import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../../services/posts.service";
import {Post} from "../../../models/Post";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  authors:any;
  post!:Post;
  title:string="";

  constructor(
    private router : Router,
    private postsService:PostsService
  ) { }

  ngOnInit(): void {
    this.post = new Post();
    this.postsService.findAllAuthors().subscribe(authors => {
      this.authors = authors;
    })
  }

  addPost(){
    this.postsService.addPost(this.post).subscribe(res=>{
      this.router.navigateByUrl('/admin/home');
    })
  }

}
