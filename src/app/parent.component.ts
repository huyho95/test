// import { Component,ViewChild } from '@angular/core';

// @Component ({
//     selector: 'app-parent',
//     template:
//      `
//      <h3>{{ value }}</h3>
//      <app-child (myClick) = "changValue($event);"></app-child>
//      `
     
// })

// export class ParentComponent {
//     value = 0;

//     changValue(isAdd: boolean) {
//         if (isAdd) {
//             this.value = this.value + 1;
//         } else {
//             this.value = this.value - 1;
//         }
//     }
// }

import { Component,ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component ({
    selector: 'app-parent',
    template:
     `
        <button (click)="onAddForChild();">Add for child</button>
        <app-child></app-child>
     `
     
})

export class ParentComponent {
    @ViewChild(ChildComponent)
    myChild: ChildComponent;

    onAddForChild() {
        this.myChild.value++;
    }
}