import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FrontPlayerComponent } from './front-player/front-player.component';
import { SideBarComponent } from './side-bar/side-bar.component';

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
import { SuccessComponent } from './administration/success/success.component';
import { FooterComponent } from './footer/footer.component';
import { ThesisComponent } from './administration/thesis/thesis.component';
import { SoftReadersComponent } from './administration/soft-readers/soft-readers.component';
import { FetchedJournalComponent } from './administration/fetched-journal/fetched-journal.component';
import { FetchedTextbookComponent } from './administration/fetched-textbook/fetched-textbook.component';
import { FetchedThesisComponent } from './administration/fetched-thesis/fetched-thesis.component';
import { SoftReaderFetcherComponent } from './administration/soft-reader-fetcher/soft-reader-fetcher.component';
import { AdminLoginPageComponent } from './administration/admin-login-page/admin-login-page.component';
import { JournalsComponent } from './journals/journals.component';
import { SoftResearchersComponent } from './soft-researchers/soft-researchers.component';
import { SmartResearchersComponent } from './smart-researchers/smart-researchers.component';
import { SoftReaderComponent } from './soft-reader/soft-reader.component';
import { TextbooksComponent } from './textbooks/textbooks.component';
import { MyThesisComponent } from './my-thesis/my-thesis.component';
import { SoftReadersShwComponent } from './soft-readers-shw/soft-readers-shw.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { FirstBookSlideComponent } from './first-book-slide/FirstBookSlideComponent';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FrontPlayerComponent,
    SideBarComponent,
    SecondBookSlideComponent,
    ThirdSlideComponent,
    FourthSlideComponent,
    FifthSlideComponent,
    AdminComponent,
    AddBookComponent,
    AdminSideBarComponent,
    JournalComponent,
    TextbookComponent,
    SuccessComponent,
    FooterComponent,
    ThesisComponent,
    SoftReadersComponent,
    FetchedJournalComponent,
    FetchedTextbookComponent,
    FetchedThesisComponent,
    SoftReaderFetcherComponent,
    AdminLoginPageComponent,
    JournalsComponent,
    SoftResearchersComponent,
    SmartResearchersComponent,
    SoftReaderComponent,
    TextbooksComponent,
    MyThesisComponent,
    SoftReadersShwComponent,
    DisplayBookComponent,
    FirstBookSlideComponent,
    AboutUsComponent
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
