import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-contact-detail',
  template: '<p>Ten:{{ name }}</p><p>SDT:{{ phoneNumber }}</p>',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  name = '';
  phoneNumber = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      // params.get('id'): lấy id vì trong app-routing.module.ts gọi tham số id 
       this.name = params.get('name');
       this.phoneNumber = params.get('phoneNumber');

    });
  }

}