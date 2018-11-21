import {Injectable} from '@angular/core';
import {CanActivate} from "@angular/router/src/utils/preactivation";
import {ActivatedRouteSnapshot} from "@angular/router";
@Injectable()

// не забывай импортировать сервис в app.module.ts, в поле providers
// для гуардов префикс Service мы не пишим
// данный сервис должен имплементироваться от CanActivate

export class AuthGuard implements CanActivate {
    readonly route: ActivatedRouteSnapshot;


}
