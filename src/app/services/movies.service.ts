import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Movie, MovieDto, MovieImages, MovieVideoDto } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  baseUrl : string = 'https://api.themoviedb.org/3';
  apiKey : string = '8c247ea0b4b56ed2ff7d41c9a833aa77';

  getMovies(movieType: string){
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${movieType}?api_key=${this.apiKey}`).pipe(switchMap((res) => {
      return of(res.results)
    }))
  }

  searchMovies(page: number){
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(switchMap(res => {
      return of(res.results)
    }))
  }

  getMovieDetail(id: string){
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

  getMovieVideos(id: string){
    return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`).pipe(switchMap(res => {
      return of(res.results)
    }))
  }

  getMovieImages(id: string){
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`)
  }
}
