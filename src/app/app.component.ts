import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'album';

  private users: any = [];
  private albums: any = [];
  private photos: any = [];
  private loadingPhotos: boolean = false;

  constructor(
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(): void {
    this.albumService.loadUsers().subscribe((response) => {
      this.users = response;
    });
  }

  loadAlbums(userID): void {
    this.albums = [];
    this.albumService.loadAlbums(userID).subscribe((response) => {
      this.albums = response;
    });
  }

  loadPhotos(albumID): void {
    this.loadingPhotos = true;
    this.photos = [];
    this.albumService.loadPhotos(albumID).subscribe((response) => {
      this.photos = response;
      this.loadingPhotos = false;
    });
  }

  closePhotoModal(): void {
    this.photos = [];
  }
}
