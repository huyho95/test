import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { CommonModule } from '@angular/common': Module chứa ngFor, ngIf, ...

// import { ContactsComponent } from './contacts/contacts.component';
import { ContactsModule } from './contacts/contacts.module';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routesConfig = [
  // { path: 'contacts', component: ContactsComponent },
  { path: 'detail/:id/:name/:phoneNumber', component: ContactDetailComponent },
  // truyền tham số id bên routerLink="/detail/{{ contact.id }} vào
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  // những path chạy từ trên dưới chưa phải vào path nào thì kí hiệu là '**'
];

// const routes: Routes = [];

@NgModule({
  imports: [
    ContactsModule, // đặt lên trước routerModule, nếu đặt lên sau thì sẽ dễ bị match với path '**' thì sẽ không chạy được
    RouterModule.forRoot(routesConfig), 
    CommonModule
  ],
  declarations: [
    // ContactsComponent,
    ContactDetailComponent,
    PageNotFoundComponent,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
