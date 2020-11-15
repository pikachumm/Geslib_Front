import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prueba-get',
  templateUrl: './prueba-get.component.html',
  styleUrls: ['./prueba-get.component.css']
})
export class PruebaGetComponent implements OnInit {
  articulos = null;

  constructor( private http: HttpClient) { }

  ngOnInit() {

    this.http.get("https://jsonplaceholder.typicode.com/posts")
    .subscribe(
      result => {
        this.articulos = result;
      },
      error => {
        console.log('problemas');
      }
    );
  }

}
