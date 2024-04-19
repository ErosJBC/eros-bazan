import { Component, Input, OnInit } from '@angular/core';
import Movie from '../../../interfaces/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
    @Input() movie!: Movie;
    imageMoviePath: string = '';

    constructor() { }

    ngOnInit(): void {
        this.getImageMovie();
    }

    getImageMovie = () => {
        this.imageMoviePath = '../../../../assets/img/cinema.avif';
    }

}
