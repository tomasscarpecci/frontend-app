import { Component, OnInit } from '@angular/core';
import { NewscategoriesService } from '../newscategories.service.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newscategories',
  templateUrl: './newscategories.component.html',
  styleUrl: './newscategories.component.css'
})
export class NewscategoriesComponent implements OnInit {
  newscategories:any = [];
  
  constructor(private service: NewscategoriesService, private route: ActivatedRoute) { }

  ngOnInit(): void{
  }

  loadNewscategories(){
    this.service.getNewscategories().subscribe(response => this.newscategories = response);
  }


}
