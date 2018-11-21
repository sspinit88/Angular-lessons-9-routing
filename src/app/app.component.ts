import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [`
        li.active {
            border: 1px solid red;
        }

        a {
            font-size: 20px;
        }
    `]
})
export class AppComponent {

}
