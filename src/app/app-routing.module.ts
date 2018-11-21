import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarsPageComponent} from "./cars-page/cars-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {CatPageComponent} from "./cat-page/cat-page.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'cars', component: CarsPageComponent, children: [
            { path: ':id/:name', component: CatPageComponent }
        ] },
    // в случае неверного ввода адреса страницы будет осуществлен переход на 404 page
    // { path: '**', component: NotFoundComponent },

    // в случае неверного ввода адреса страницы будет осуществлен переход на гдавную
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/' }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
