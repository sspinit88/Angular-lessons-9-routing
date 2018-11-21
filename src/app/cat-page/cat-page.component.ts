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

        this.id = this.route.snapshot.params['id'];
        this.name = this.route.snapshot.params['name'];

        this.color = this.route.snapshot.queryParams['color'];
        this.year = this.route.snapshot.queryParams['year'];

        this.hash = this.route.snapshot.fragment; // (s3)


        this.route.params.subscribe((params: Params) => {
            console.log(params); // получим объект с полем id и name
            this.id = params['id'];
            this.name = params['name'];
        });

        this.route.params.subscribe((params: Params) => {
            this.color = params['color'];
            this.year = params['year'];

        });
    }

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
