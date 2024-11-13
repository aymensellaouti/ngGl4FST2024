import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/component/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';
import { PereComponent } from './comInterCompo/pere/pere.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { APP_ROUTES } from './config/app-routes.config';
import { NF404Component } from './components/nf404/nf404.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './auth/login/login.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authGuard } from './auth/guards/auth.guard';
// /todo
const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    { path: '', component: FirstComponent },
    { path: APP_ROUTES.cv, component: CvComponent },
    { path: `${APP_ROUTES.cv}/add`, component: AddCvComponent, canActivate: [authGuard] },
    { path: `${APP_ROUTES.cv}/:id`, component: DetailsCvComponent },
    { path: 'todo', component: TodoComponent },
    { path: 'word', component: MiniWordComponent },
    { path: 'color', component: ColorComponent },
    { path: 'login', component: LoginComponent },
    { path: ':unParam', component: SecondComponent },
  ]},
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
