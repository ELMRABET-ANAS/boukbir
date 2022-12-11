import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { PostNotFoundComponent } from './post/post-not-found/post-not-found.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CreatePostComponent } from './admin/admin-home/create-post/create-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomeComponent,
    PostNotFoundComponent,
    AdminHomeComponent,
    CreatePostComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
