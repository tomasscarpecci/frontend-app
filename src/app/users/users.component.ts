import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users:any = [];

  constructor(private service: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.loadUsers();
  }

  loadUsers(){
    this.service.getUsers().subscribe(response => this.users = response);
  }

}
