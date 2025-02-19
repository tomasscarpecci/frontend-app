import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  data:any = [];
  Use = { Nombre: '', Apellido: '', Mail: '', Clave: '' }

  constructor(private service: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void{
  }

  loadUsers(){
    this.service.getUsers().subscribe(response => this.data = response.data);
  }

  deleteUser(id: string) {
    if (!id) {
      console.error("Error: ID no válido");
      return;
    }
    this.service.deleteUser(id).subscribe({
      next: () => {
        console.log(`Usuario con ID ${id} eliminado`);
        this.loadUsers();
      },
      error: (err) => {
        console.error("Error al eliminar el usuario:", err);
      }
    });

  }

  createUser() {
    this.service.createUser(this.Use).subscribe(response => {
      console.log('Usuario creado:', response);
      this.loadUsers();
    }, error => {
      console.error('Error al crear usuario:', error);
    });

}

}
