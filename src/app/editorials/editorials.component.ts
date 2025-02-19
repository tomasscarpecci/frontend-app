import { Component, OnInit } from '@angular/core';
import { EditorialsService } from '../editorials.service.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editorials',
  templateUrl: './editorials.component.html',
  styleUrl: './editorials.component.css'
})
export class EditorialsComponent implements OnInit {
  editoriales:any = [];
  Edit = { nombreFantasia: '', cuil: '', razonSocial: ''}
  
  constructor(private service: EditorialsService, private route: ActivatedRoute) { }

  ngOnInit(): void{
  }

  loadEditorials(){
    this.service.getEditorials().subscribe(response => this.editoriales = response.editoriales);
  }

  deleteEditorial(id: string) {
    if (!id) {
      console.error("Error: ID no válido");
      return;
    }
    this.service.deleteEditorial(id).subscribe({
      next: () => {
        console.log(`Editorial con ID ${id} eliminada`);
        this.loadEditorials();
      },
      error: (err) => {
        console.error("Error al eliminar la editorial:", err);
      }
    });

  }

  createEditorial() {
    this.service.createEditorial(this.Edit).subscribe(response => {
      console.log('Editorial creada:', response);
      this.loadEditorials();
    }, error => {
      console.error('Error al crear editorial:', error);
    });

}

}
