import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, MoviesComponent } from './views';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'movies', component: MoviesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
