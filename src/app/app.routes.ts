import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewsComponent } from './news/news.component.js';
import { EditorialsComponent } from './editorials/editorials.component.js';
import { NewscategoriesComponent} from './newscategories/newscategories.component.js';
import { UsersComponent } from './users/users.component.js';

export const routes: Routes = [
  {path: 'editorial', component: EditorialsComponent},
  {path: 'newscategories', component: NewscategoriesComponent},
  {path: 'users', component: UsersComponent},
  {path: 'news', component: NewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

/*  
    {path: '**', component: NewsComponent},
    {path: 'news/:id', component: NewsComponent },
    {path: 'newscategories/:id', component: NewsComponent },*/