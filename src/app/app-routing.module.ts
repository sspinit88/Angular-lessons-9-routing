import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
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
        // children - массив из дочерних еомпонентов, екущего компонента
        // теперь нужно указать куда вставить дочерний компонент
        component: CarsPageComponent, children:[
            {
                path: ':id/:name',
                component: CatPageComponent
            },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
