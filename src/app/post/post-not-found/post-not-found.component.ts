import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-not-found',
  templateUrl: './post-not-found.component.html',
  styleUrls: ['./post-not-found.component.css']
})
export class PostNotFoundComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  toHome(){
    this.router.navigate(['home'])
  }
}
