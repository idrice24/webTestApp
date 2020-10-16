import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './components/media/media.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { GalleryComponent } from './components/gallery/gallery.component';



@NgModule({
  declarations: [MediaComponent, VideoListComponent, GalleryComponent],
  imports: [
    CommonModule
  ]
})
export class MediaModule { }
