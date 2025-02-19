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
  newNews = { titulo: '', contenido: '', fechaPublicacion: '', fechaCreacion: '' };

  constructor(private service:NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void{
  }

  loadNews() {
  this.service.getNews().subscribe({
    next: (response) => {
      this.news = response.news;
    },
    error: (err) => {
      console.error("Error al cargar noticias:", err);
    }
  });
}


  deleteNew(id: string) {
  if (!id) {
    console.error("Error: ID no válido");
    return;
  }
  this.service.deleteNew(id).subscribe({
    next: () => {
      console.log(`Noticia con ID ${id} eliminada`);
      this.loadNews();
    },
    error: (err) => {
      console.error("Error al eliminar la noticia:", err);
    }
  });
}

createNew() {
    this.service.createNew(this.newNews).subscribe(response => {
      console.log('Noticia creada:', response);
      this.loadNews();
    }, error => {
      console.error('Error al crear noticia:', error);
    });
  }


  
}
