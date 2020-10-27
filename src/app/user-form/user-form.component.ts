import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name = '';
  evenStyle = { color: 'red', fontSize: '30px' };
  oddStyle = { color: 'black', fontSize: '20px' };
  isHighlight = true;
  currentCLass = { circle : !this.isHighlight, square : this.isHighlight };
  constructor() { }
// this: đại diện cho các component được tạo ra
  ngOnInit(): void {
  }
  // showEvent(iven) {
  //   this.name = iven.target.value;
  // }

}
