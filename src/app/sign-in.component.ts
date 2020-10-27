import { Component, Input } from '@angular/core';
import { SignInService } from './sign-in.service';
// @Component({
//     selector: 'app-sign-in',
//     template: `
//     <form (ngSubmit)="onSubmit(formSignIn);" #formSignIn="ngForm">
//         <input placeholder="Email" ngModel name="email" required>
//         <br>
//         <p *ngIf = "formSignIn.controls.email?.errors?.required">
//             Email is required
//         </p>
//         <input type="password" placeholder="Password" ngModel name="password">
//         <br>
//         <button>Submit</button>
//     </form>
//     `
//     ? : khác null hoặc khác required
//     <button [disabled]="formSignIn.invalid">Submit</button> : người dùng chưa nhập email thì sẽ ẩn nút button
// })



// @Component({
//     selector: 'app-sign-in',
//     template: `
//     <form (ngSubmit)="onSubmit(formSignIn);" #formSignIn="ngForm">
//         <input placeholder="Email" ngModel name="email">
//         <br>
//         <input type="password" placeholder="Password" ngModel name="password">
//         <br>
//         <button>Submit</button>
//     </form>
//     `
// })



@Component({
    selector: 'app-sign-in',
    template: `
    <form (ngSubmit)="onSubmit(formSignIn);" #formSignIn="ngForm">
        <input 
            placeholder="Email" 
            ngModel 
            #txtEmail="ngModel"
            name="email"
            required
            email
        >
        <p style="margin-bottom: 0px" *ngIf = "txtEmail.touched && txtEmail.errors?.required">
            Email is required
        </p>
        <p style="margin-bottom: 0px" *ngIf = "txtEmail.touched && txtEmail.errors?.email">
            Email is not valid
        </p>
        <br>
        <input  type="password" 
                placeholder="Password" 
                ngModel 
                #txtPassword ="ngModel"
                name="password"
                minlength="6"
                pattern="[a-z]*"

        >
        <br>
        <div ngModelGroup="subjects">
            <label><input type="checkbox" [ngModel]="false" name="NodeJs" > NodeJs</label>
            <label><input type="checkbox" [ngModel]="false" name="Angular" > Angular</label>
            <label><input type="checkbox" [ngModel]="false" name="ReactJs" > ReactJs</label>
        </div>
        <br>
        <button [disabled]="formSignIn.invalid">Submit</button>
    </form>
    <br>
    
    <p>{{ txtEmail.errors | json }}</p>
    <p>{{ txtPassword.errors | json }}</p>
    <p>{{ formSignIn.value | json }}</p>

    `,
    providers: [SignInService]
    
    //<button (click)="postToExpress();">Post</button>
    // txtEmail : thay thế cho formSignIn.controls.email? trong console của web
    //label, bình thường chỉ để ngModel, mún ngay khi bật lên có giá trị bằng false thì [ngModel]="false"
})
// export class SignInComponent {
//     constructor(private http: HttpClient) {}
//     onSubmit(formSignIn) {
//         // console.log(formSignIn);
//         // throw new Error('Form is invalid');

//         const url = 'http://localhost:3000/signin';
//         const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//         // Content-Type vaf application/json trong postman phần headers
//         const body = JSON.stringify(formSignIn.value);
//         //stringify: đổi javacript object thành json
//         this.http.post(url, body, { headers, responseType: 'json'})
//         // vì res.send(req.body) là javascript object nên responseType là json
//         .toPromise()
//         .then(resJSON =>  console.log(resJSON));

//     }

//     // postToExpress() {
//     //     const url = 'http://localhost:3000/signin';
//     //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     //     // Content-Type vaf application/json trong postman phần headers
//     //     const body = JSON.stringify({ name: 'Khoa Pham' });
//     //     //stringify: đổi javacript object thành json
//     //     this.http.post(url, body, { headers, responseType: 'text'})
//     //     .toPromise()
//     //     // res.send(req.body.name) : json đang gửi dưới dạng text, thuộc tính name dạng string nên res.text thay vì res.json
//     //     .then(resText =>  console.log(resText));
//     //     // sau khi thực hiện phương thức toPromise() thì được một biến ta tự đặt tên cho nó là resText
//     // }
// }

export class SignInComponent {
    constructor(private signInService: SignInService) {}
        onSubmit(formSignIn) {
            this.signInService.sendPost(formSignIn.value)
            .then(result => console.log(result))
            .catch(err => console.log(err));
        }
}

