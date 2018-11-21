import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarsPageComponent} from "./cars-page/cars-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {CatPageComponent} from "./cat-page/cat-page.component";

const appRoutes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'cars',
        component: CarsPageComponent
    },
    // запись  path: 'cars/:id' (вместо id любую переменную ставь)
    // это для перехода на внутренние страницы каждой из машин (динамически)
    // далее смотри cars-page.component.html

    // теперь зададим нов динам переменную
    {
        path: 'cars/:id/:name',
        component: CatPageComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
