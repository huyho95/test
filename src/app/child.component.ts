// import { Component, Output, EventEmitter } from '@angular/core';

// @Component ({
//     selector: 'app-child',
//     template: `
//     <button (click)="addForParent();">Add</button>
//     <br>
//     <button (click)="subForParent();">Sub</button>
//     `
// })

// export class ChildComponent {
//     @Output() myClick = new EventEmitter<boolean>();
     
//     addForParent() {
//         this.myClick.emit(true);
//         // emit: thực thi sự kiện
//     }

//     subForParent() {
//         this.myClick.emit(false);
//     }
// }

import { Component } from '@angular/core';

@Component ({
    selector: 'app-child',
    template: `
        <h3>{{ value }}</h3>
    `
})

export class ChildComponent {
   value = 0;
}