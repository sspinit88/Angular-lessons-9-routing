import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarsPageComponent} from "./cars-page/cars-page.component";
import {HomePageComponent} from "./home-page/home-page.component";


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
  // указываем входные и выходные данные модуля
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

// импортируем в app.module.ts
export class AppRoutingModule { }
