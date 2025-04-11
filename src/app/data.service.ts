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
    const params = new HttpParams().set('_limit', 30);
    return this.http.get<Post[]>(this.url, {params});
  }

  getPostById(id: number): Observable<Post[]>{
    const params = new HttpParams().set('id', id);
    console.log(params);
    return this.http.get<Post[]>(this.url, { params });
  }

  addPost() {
    const post = { id: 101, userID: 1000, title: 'adadadad', body: 'dadadadd' };
    return this.http.post(this.url, post);
  }

  
}
