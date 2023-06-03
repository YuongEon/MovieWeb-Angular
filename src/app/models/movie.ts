export interface Movie{
  adult: false,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: false,
  vote_average: number,
  vote_count: number,
  revenue?: number,
  runtime?: number,
  status?: string,
  genres?: Genre[]
}

export interface MovieDto {
  page: number,
  results: Movie[],
  total_results: number,
  total_pages: number
}

export interface Genre {
    id: number,
    name: string
}

export interface MovieVideoDto {
  id: number,
  results: MovieVideo[];
}

export interface MovieVideo {
  iso_639_1: string,
  iso_3166_1: string,
  name: string,
  key: string,
  site: string,
  size: number,
  type: string,
  official: boolean,
  published_at: string,
  id: string
}

export interface MovieImages {
  backdrops: {
    file_path: string
  }[]
}

export interface MovieCredits {
  cast: {
    name: string,
    profile_path: string
  }[]
}