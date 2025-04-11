import { inject, Injectable } from '@angular/core';
import { posts } from './post-data';
import { Post } from './post';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);
  url = 'https://jsonplaceholder.typicode.com/posts';
  
  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.url);
  }

  getPostById(id: number): Observable<Post[]>{
    const params = new HttpParams().set('id', id);
    console.log(params);
    return this.http.get<Post[]>(this.url, { params });
  }


}
