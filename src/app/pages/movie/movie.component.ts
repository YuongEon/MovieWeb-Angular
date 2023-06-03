import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie, MovieCredits, MovieImages, MovieVideo } from '../../models/movie';
import { IMAGE_SIZES } from 'src/app/constants/image-sizes';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy{

  movie: Movie | null = null;
  readonly imageSizes = IMAGE_SIZES;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null
  movieSimilar: Movie[] = []

  constructor(private route: ActivatedRoute, private moviesService : MoviesService){}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({id}) => {
      this.getMovie(id);
      this.getMovieVideo(id);
      this.getMovieImages(id)
      this.getMovieCredits(id)
      this.getMovieSimilar(id)
    })
  }

  ngOnDestroy(): void {
    console.log('component destroyed');
  }

  getMovie(id: string){
    this.moviesService.getMovieDetail(id).subscribe((movieData) => {
      this.movie = movieData
    })
  }

  getMovieVideo(id: string){
    this.moviesService.getMovieVideos(id).subscribe((movieVideosData) => {
      this.movieVideos = movieVideosData
    })
  }

  getMovieImages(id:string){
    this.moviesService.getMovieImages(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
    })
  }

  getMovieCredits(id:string){
    this.moviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData
    })
  }

  getMovieSimilar(id:string){
    this.moviesService.getMovieSimilar(id).subscribe((movieSimilarData) => {
      this.movieSimilar = movieSimilarData
    })
  }
}
