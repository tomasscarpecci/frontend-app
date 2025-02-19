import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes.js';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component.js';
import { HttpClientModule } from '@angular/common/http';
import { EditorialsComponent } from './editorials/editorials.component.js';
import { NewscategoriesComponent } from './newscategories/newscategories.component.js';
import { UsersComponent } from './users/users.component.js';

@NgModule({
  declarations: [AppComponent, NewsComponent, EditorialsComponent, NewscategoriesComponent, UsersComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
