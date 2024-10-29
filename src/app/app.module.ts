import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule } from '@angular/forms';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './comInterCompo/pere/pere.component';
import { FilsComponent } from './comInterCompo/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { CvListComponent } from './cv/cv-list/cv-list.component';
import { CvItemComponent } from './cv/cv-item/cv-item.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { TodoComponent } from './todo/component/todo/todo.component';
import { RainbowDirective } from './directives/rainbow.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    CvCardComponent,
    CvListComponent,
    CvItemComponent,
    NgStyleComponent,
    HighlightDirective,
    MiniWordComponent,
    TodoComponent,
    RainbowDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
