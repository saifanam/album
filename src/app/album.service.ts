import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }

  loadUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  loadAlbums(userID) {
    return this.http.get(`${this.baseUrl}/albums?userId=${userID}`);
  }

  loadPhotos(albumID) {
    return this.http.get(`${this.baseUrl}/photos?albumId=${albumID}`);
  }

}
