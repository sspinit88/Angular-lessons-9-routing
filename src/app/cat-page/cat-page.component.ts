import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
    selector: 'app-cat-page',
    templateUrl: './cat-page.component.html',
    styleUrls: ['./cat-page.component.css']
})
export class CatPageComponent implements OnInit {

    id: string;
    name: string;
    color: string;
    year: string;
    hash: string;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        // snapshot - позволяет обратиться к адресной строке
        // params - объект, где хранятся все эл, прописанные в адресной строке

        this.id = this.route.snapshot.params['id'];
        this.name = this.route.snapshot.params['name'];

        this.color = this.route.snapshot.queryParams['color'];  // (s2)
        this.year = this.route.snapshot.queryParams['year'];  // (s2)

        this.hash = this.route.snapshot.fragment; // (s3)

        // все в/у параметры можно получать и иным способом (s1)
        // это уже стрим, подписываемся на прослушку изменения адресной строки
        this.route.params.subscribe((params: Params) => {
            console.log(params); // получим объект с полем id и name
            this.id = params['id'];
            this.name = params['name'];
        });

        // - (s4) - подписываемся на динамическое обновление параметров
        this.route.params.subscribe((params: Params) => {
            this.color = params['color'];
            this.year = params['year'];

        });
    }

    // для осуществления перехода по странице необходимо подключить "private router: Router"
    openPage() {
        this.router.navigate(['./cars', 8, 'testAuto'], {
            queryParams: {
                color: 'pink',
                year: 1995
            },
            fragment: 'pic'
        });
    }

}
