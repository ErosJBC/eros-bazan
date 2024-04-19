import { Component, OnInit } from '@angular/core';
import Movie from '../../interfaces/movie';
import { DataService } from '../../data/data.service';
import { MOVIES_PATH } from '../../constants';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    moviesList: Array<Movie> = [];
    genresList: Array<string> = [];
    filteredMovies: Array<Movie> = [];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.getJson();
    }

    getJson = async () => {
        const response = await this.dataService.getData(MOVIES_PATH);
        if (response.status === 200) {
            this.getMovies(response.data);
            this.getGenres(response.data);
        }
    }

    getGenres = (data: any) => {
        this.genresList = data.genres.concat(['All movies']);
    }

    getMovies = (data: any) => {
        this.moviesList = data.movies;
        this.filteredMovies = this.moviesList;
    }

    filterByTitleOrDescription = (event: Event) => {
        event.preventDefault();
        this.filteredMovies = this.moviesList.filter(
            (movie) => movie.title.toLowerCase().includes((event.target as HTMLInputElement).value.toLowerCase())
                    || movie.description.toLowerCase().includes((event.target as HTMLInputElement).value.toLowerCase())
        );
    }

    filterByGenre = (genre: string) => {
        if (genre === 'All movies') this.filteredMovies = this.moviesList;
        else this.filteredMovies = this.moviesList.filter((movie) => movie.genre === genre);
    }
}
