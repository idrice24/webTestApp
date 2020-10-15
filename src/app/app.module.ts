import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ManageBlogsComponent } from './admin/manage-blogs/manage-blogs.component';
import { ManageCategoriesComponent } from './admin/manage-categories/manage-categories.component';
import { ManagePagesComponent } from './admin/manage-pages/manage-pages.component';
import { LoginComponent } from './auth/login/login.component';
import { AboutComponent } from './core/components/about/about.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { HomeComponent } from './core/components/home/home.component';
import { NewsletterComponent } from './core/components/newsletter/newsletter.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { RegisteryComponent } from './core/components/registery/registery.component';
import { SearchResultComponent } from './search/components/search-result/search-result.component';
import { SearchUiComponent } from './search/components/search-ui/search-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminComponent,
    ManageBlogsComponent,
    ManageCategoriesComponent,
    ManagePagesComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NewsletterComponent,
    PageNotFoundComponent,
    RegisteryComponent,
    SearchResultComponent,
    SearchUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
