import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {

  isshow = true;
  arrSubjects = ['Angular' , 'React' , 'Node'];
  constructor() { }

  ngOnInit(): void {
  }

}
