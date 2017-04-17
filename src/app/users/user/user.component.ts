import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name = 'jeremy';
  about = 'i am here to meet new people';
  imagepath = '';
  
  constructor() { }

  ngOnInit() {
  }

}
