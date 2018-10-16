import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  searchUrl: string;
  constructor(private _http: HttpClient) { }

  searchMusic(str: string, type = 'artist') {
    this.searchUrl = 'https://api.spotify.com/v1?query=' + str + '&offset=0&limit=20&type=' + type;
  }



}
