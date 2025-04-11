import { Component, inject, input } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  imports: [RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {

  id = input.required<number>()

  dataService = inject(DataService);

  post!: Post
  
  ngOnInit(){ 
    //this.post = this.dataService.getPostById(this.id());
    console.log(this.id());
    this.dataService.getPostById(this.id()).subscribe((data) => {
      this.post = data[0];
    });
  }
}


