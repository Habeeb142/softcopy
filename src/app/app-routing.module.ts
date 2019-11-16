import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './administration/admin/admin.component';
import { AddBookComponent } from './administration/add-book/add-book.component';
import { FetchedJournalComponent } from './administration/fetched-journal/fetched-journal.component';
import { SuccessComponent } from './administration/success/success.component';
import { FetchedTextbookComponent } from './administration/fetched-textbook/fetched-textbook.component';
import { FetchedThesisComponent } from './administration/fetched-thesis/fetched-thesis.component';
import { SoftReaderFetcherComponent } from './administration/soft-reader-fetcher/soft-reader-fetcher.component';
import { AdminLoginPageComponent } from './administration/admin-login-page/admin-login-page.component';
import { JournalComponent } from './administration/journal/journal.component';
import { JournalsComponent } from './journals/journals.component';
import { SoftResearchersComponent } from './soft-researchers/soft-researchers.component';
import { SmartResearchersComponent } from './smart-researchers/smart-researchers.component';
import { SoftReaderComponent } from './soft-reader/soft-reader.component';
import { TextbooksComponent } from './textbooks/textbooks.component';
import { MyThesisComponent } from './my-thesis/my-thesis.component';
import { SoftReadersShwComponent } from './soft-readers-shw/soft-readers-shw.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminLoginPageComponent },
  { path: 'add', component: AddBookComponent },
  { path: 'journal', component: FetchedJournalComponent },
  { path: 'textbook', component: FetchedTextbookComponent },
  { path: 'thesis', component: FetchedThesisComponent },
  { path: 'soft-readers', component: SoftReaderFetcherComponent },
  { path: 'soft-researchers', component: SoftResearchersComponent },
  { path: 'smart-researchers', component: SmartResearchersComponent },
  { path: 'soft-reader', component: SoftReaderComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'journals/:q', component: JournalsComponent },
  { path: 'textbooks/:q', component: TextbooksComponent },
  { path: 'my-thesis/:q', component: MyThesisComponent },
  { path: 'soft-readers/:q', component: SoftReadersShwComponent },
  { path: 'show/:type/:id/:format', component: DisplayBookComponent },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
