import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    template:`
        <form (ngSubmit)="onSubmit();" [formGroup]="formSignUp">    
            <input placeholder="Email" formControlName="email">
            <p *ngIf="formSignUp.get('email').invalid && formSignUp.get('email').touched">Email is required</p>
            <br>
            <input type="password" placeholder="Password" formControlName="password">
            <br>
            <div formGroupName = "subject">
                <label><input type="checkbox"  name="NodeJs" formControlName="nodeJS" > NodeJs</label>
                <label><input type="checkbox"  name="Angular" formControlName="angular" > Angular</label>
                <label><input type="checkbox"  name="ReactJs" formControlName="reactJS" > ReactJs</label>
            </div>
            <br>
            <button [disabled]="formSignUp.invalid">Submit</button>
            <br>
            <code>{{ formSignUp.controls.email.errors | json }}</code>
        </form>
    `
    // [FormGroup]="formSignUp" : có dấu ngoặc vuông vì đang binding property
    // FormControlName : không thể viết formControl="email" vì không có biến this.email
    //"password","nodeJS",.. là biến trong constructor
    //formSignUp.controls.email.invalid có thể thay bằng formSignUp.get('email').invalid
})

// export class SignUpComponent {
//     formSignUp: FormGroup;

//     constructor() {
//         this.formSignUp = new FormGroup({
//             email: new FormControl('a@gmai.com'),
//             password: new FormControl(),

//             subject: new FormGroup({
//                 nodeJS: new FormControl(false),
//                 angular: new FormControl(true),
//                 reactJS: new FormControl(false)
//             })
//         });
//         // trong javascript: không có lệnh đóng mở ngoặc () như dòng trên vẫn chạy bình thường
//     }

//     onSubmit() {
//         console.log(this.formSignUp.value);
//     }
// }

export class SignUpComponent implements OnInit {

    formSignUp: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
       this.formSignUp = this.fb.group({
            // email: ['', Validators.required] , validators này thực chất là một hàm, mình có thể tự tạo một hàm cho nó. Ví dụ như hàm gmailValidator bên dưới
            email: ['', [Validators.email, this.gmailValidator]],
            password:'',

            subject: this.fb.group({
                nodeJS: false,
                angular: true,
                reactJS: false
            })
        });
    }

    onSubmit() {
        console.log(this.formSignUp.value);
    }

    gmailValidator(formControl: FormControl) {
        if (formControl.value.includes('@gmail.com')) {
            // includes: kiểm tra xem một chuỗi có giống với chuỗi kia hay không ?
            return null;
        }
        return { gmail  : false }; // return lại object
    }   
    
}

//import FormBuilder, thực hiện OnInit, thay đổi cấu trúc còn nội dung thì hoàn toàn giống nhau