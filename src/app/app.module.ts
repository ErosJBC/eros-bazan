import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent, ToolbarComponent } from './shared';
import { HomeComponent } from './views/home/home.component';
import { MoviesComponent } from './views/movies/movies.component';

@NgModule({
    declarations: [
        AppComponent,
        MovieCardComponent,
        ToolbarComponent,
        HomeComponent,
        MoviesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
