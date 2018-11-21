import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    // импортируем в компонент специальный роутер, который
    // будет позволять делать навигацию между страницами

    constructor(private router:Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
    }

    // программная навигация

    openCarsPage() {
        // метод .navigate() принимает несколько параметров:

        // 1) [], первый элемент - строка (роут на который нужно перейти)
        // используется абсолютная ссылка, для перехода по елику на кнопку этого достаточно

        // если нужно делать переход на страницу по относительному пути
        // используем второй параметр

        // 2) [], второй параметр - {relativeTo: }
        // в конструкторе инициализируем 'private route: ActivatedRoute'
        // переход на другую страницу будет осуществляться относительно 'route'

        this.router.navigate(['cars'], {relativeTo: this.route});

    }

}
