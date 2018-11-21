import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-cat-page',
    templateUrl: './cat-page.component.html',
    styleUrls: ['./cat-page.component.css']
})
export class CatPageComponent implements OnInit {

    id: string;
    name: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        // snapshot - позволяет обратиться к адресной строке
        // params - объект, где хранятся все эл, прописанные в адресной строке

        this.id = this.route.snapshot.params['id'];
        this.name = this.route.snapshot.params['name'];

        // все в/у параметры можно получать и иным способом
        // это уже стрим, подписываемся на прослушку изменения адресной строки
        this.route.params.subscribe((params:Params) => {
            console.log(params); // получим объект с полем id и name
            this.id = params['id'];
            this.name = params['name'];
        });


    }

}
