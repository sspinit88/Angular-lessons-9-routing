import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {
  cars = [
    {
      name: 'Ford',
      id: 1,
      year: 2010,
      color: 'red'
    },
    {
      name: 'Audi',
      id: 2,
      year: 2001,
      color: 'pink'
    },
    {
      name: 'BMW',
      id: 3,
      year: 1985,
      color: 'grey'
    },
    {
      name: 'Mercedes',
      id: 4,
      year: 1956,
      color: 'green'
    }
  ]
}
