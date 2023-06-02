import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie, MovieImages, MovieVideo } from '../../models/movie';
import { IMAGE_SIZES } from 'src/app/constants/image-sizes';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit{

  movie: Movie | null = null;
  readonly imageSizes = IMAGE_SIZES;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;

  constructor(private route: ActivatedRoute, private moviesService : MoviesService){}

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.getMovie(id);
      this.getMovieVideo(id);
      this.getMovieImages(id)
    })
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
}
