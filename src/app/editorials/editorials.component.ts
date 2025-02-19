import { Component, OnInit } from '@angular/core';
import { EditorialsService } from '../editorials.service.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editorials',
  templateUrl: './editorials.component.html',
  styleUrl: './editorials.component.css'
})
export class EditorialsComponent implements OnInit {
  editorials:any = [];
  
  constructor(private service: EditorialsService) { }

  ngOnInit(): void{
  }

  loadEditorials(){
    this.service.getEditorials().subscribe(response => this.editorials = response.editorials);
  }

}
