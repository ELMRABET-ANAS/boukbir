import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../../services/posts.service";

@Component({
  selector: 'app-create-edit-post',
  templateUrl: './create-edit-post.component.html',
  styleUrls: ['./create-edit-post.component.css']
})
export class CreateEditPostComponent implements OnInit {

  authors:any;

  constructor(
    private postsService:PostsService
  ) { }

  ngOnInit(): void {
    this.postsService.findAllAuthors().subscribe(authors => {
      this.authors =authors;
    })
  }



}
