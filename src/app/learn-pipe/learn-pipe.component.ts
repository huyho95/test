import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  birthday = new Date(2011, 12, 5);
  // new : tạo mới
  person = { name : 'huy', age : '16' };
  address = Promise.resolve("315 Hoang Dieu");
  constructor() { }

  ngOnInit(): void {
  }

}
