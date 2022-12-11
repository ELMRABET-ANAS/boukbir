import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from "./post/post.component";
import {HomeComponent} from "./home/home.component";
import {PostNotFoundComponent} from "./post/post-not-found/post-not-found.component";
import {AdminHomeComponent} from "./admin/admin-home/admin-home.component";
import {CreatePostComponent} from "./admin/admin-home/create-post/create-post.component";

const routes: Routes =  [
      {path: '', redirectTo:'home', pathMatch : 'full'},
      {path: 'post/:id', component: PostComponent},
      {path: 'home', component: HomeComponent},
      {path: 'notfound', component: PostNotFoundComponent},
      {path: 'admin/home', component: AdminHomeComponent},
      {path: 'admin/createPost', component: CreatePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
