import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ManageGalleryComponent } from './manage-gallery/manage-gallery.component';
import { ManageBlogComponent } from './manage-blog/manage-blog.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
