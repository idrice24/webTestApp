import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

import { AboutComponent } from './core/components/about/about.component';
import { NewsletterComponent } from './core/components/newsletter/newsletter.component';

import { ContactComponent } from './core/components/contact/contact.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { GalleryComponent } from './media/components/gallery/gallery.component';
import { LoginComponent } from './core/components/login/login.component';
import { RegistryComponent } from './core/components/registry/registry.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
