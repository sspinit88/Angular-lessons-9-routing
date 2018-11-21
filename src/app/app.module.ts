import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {CarsPageComponent} from './cars-page/cars-page.component';
import {CarsService} from './cars.service';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {CatPageComponent} from './cat-page/cat-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuardService} from "./auth-guard.service";
import {AuthService} from "./auth.service";

// для всего перечисленного лучше всего создать отдельный модульный файл и там вести работу, что и было сделанно

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        CarsPageComponent,
        CatPageComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [CarsService, AuthGuardService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
