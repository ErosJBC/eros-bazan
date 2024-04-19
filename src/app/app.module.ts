import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared';
import { HomeComponent, MovieItemComponent, MovieListComponent, MoviesComponent } from './views';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        HomeComponent,
        MoviesComponent,
        MovieListComponent,
        MovieItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
