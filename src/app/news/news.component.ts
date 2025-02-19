import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service.js';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {

  news:any = [];

  constructor(private service:NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void{
  }

  loadNews(){
    this.service.getNews().subscribe(response => this.news = response.news);
  }


  
}
