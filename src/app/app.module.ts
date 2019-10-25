import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FrontPlayerComponent } from './front-player/front-player.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FirstBookSlideComponent } from './first-book-slide/first-book-slide.component';
import { HttpClientModule } from '@angular/common/http';
import { SecondBookSlideComponent } from './second-book-slide/second-book-slide.component';
import { ThirdSlideComponent } from './third-slide/third-slide.component';
import { FourthSlideComponent } from './fourth-slide/fourth-slide.component';
import { FifthSlideComponent } from './fifth-slide/fifth-slide.component';
import { AdminComponent } from './administration/admin/admin.component';
import { AddBookComponent } from './administration/add-book/add-book.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatFormFieldModule } from '@angular/material/form-field'​;
// import { MatInputModule } from '@angular/material/input';
import { AdminSideBarComponent } from './administration/admin-side-bar/admin-side-bar.component';
import { JournalComponent } from './administration/journal/journal.component';
import { TextbookComponent } from './administration/textbook/textbook.component';
import { SuccessComponent } from './administration/success/success.component'​;

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FrontPlayerComponent,
    SideBarComponent,
    FirstBookSlideComponent,
    SecondBookSlideComponent,
    ThirdSlideComponent,
    FourthSlideComponent,
    FifthSlideComponent,
    AdminComponent,
    AddBookComponent,
    AdminSideBarComponent,
    JournalComponent,
    TextbookComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // BrowserAnimationsModule,
    // MatInputModule,
    // MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
