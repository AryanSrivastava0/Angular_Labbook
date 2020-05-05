import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AddMovieComponent} from './app.addmovie'
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,FormsModule
        
    ],
    declarations: [
        AppComponent,AddMovieComponent,
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }