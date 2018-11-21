import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {CarsPageComponent} from './cars-page/cars-page.component';
import {CarsService} from './cars.service';
import {HttpClientModule} from "@angular/common/http";
import {Routes, RouterModule} from "@angular/router";

// создаем массив, отвечающий за роуты
// каждый из элементов массива должен содержать два обязателных поля:
// 1)  path - отвечает за роут в адресной стоке
// 2) component - компонент, который будет загружаться при обращению к роуту

// важно импортироваь RouterModule, затем зарегистрировать его в imports
// передаем RouterModule метод .forRoot(), в метод передаем массив с роутами -> RouterModule.forRoot(appRoutes)



const appRoutes: Routes = [
    // тут path равен пустой строке, так как, когда будем заходить на localhost,
    // будет отображаться определенны компонент

    {
        path: '',
        component: HomePageComponent
    },
    // в адресной строке будет путь: localhost:4200/cars
    {
        path: 'cars',
        component: CarsPageComponent
    },
];

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        CarsPageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [CarsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
