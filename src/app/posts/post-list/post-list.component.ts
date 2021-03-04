import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// posts = [
//   {name:"First Post", content: "This is first post"},
//   {name:"Second Post", content: "This is second post"},
//   {name:"Third Post", content: "This is third post"}
// ];
posts = [];
}
