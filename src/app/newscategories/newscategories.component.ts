import { Component, OnInit } from '@angular/core';
import { NewscategoriesService } from '../newscategories.service.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newscategories',
  templateUrl: './newscategories.component.html',
  styleUrl: './newscategories.component.css'
})
export class NewscategoriesComponent implements OnInit {
  categories:any = [];
  editingCategory: any = null;
  catNew = { name: '' };
  
  constructor(private service: NewscategoriesService, private route: ActivatedRoute) { }

  ngOnInit(): void{
  }

  loadNewscategories(){
    this.service.getNewscategories().subscribe(response => this.categories = response.categories);
  }

  deleteNewscategory(id: string) {
  if (!id) {
    console.error("Error: ID no válido");
    return;
  }
  this.service.deleteNewCategory(id).subscribe({
    next: () => {
      console.log(`Noticia con ID ${id} eliminada`);
      this.loadNewscategories();
    },
    error: (err) => {
      console.error("Error al eliminar la categoria:", err);
    }
  });
}

  createNewsCategory() {
    this.service.createNewCategory(this.catNew).subscribe(response => {
      console.log('Categoria creada:', response);
      this.loadNewscategories();
    }, error => {
      console.error('Error al crear categoria:', error);
    });
  }

  startEditingCategory(categoryItem: any) {
    this.editingCategory = { ...categoryItem };
  }

  updateNewsCategory() {
    this.service.updateNewCategory(this.editingCategory.id, this.editingCategory).subscribe(response => {
      console.log('Categoria actualizada:', response);
      this.loadNewscategories();
      this.editingCategory = null;
    }, error => {
      console.error('Error al actualizar categoria:', error);
    });
  }

  cancelEditingCategory() {
    this.editingCategory = null;
  }


}
