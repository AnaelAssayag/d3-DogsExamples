import { Injectable } from '@angular/core';


const DOGS = [
  {name: 'Rex', weight: 20, birthDate: new Date(2006, 2, 21)},
  {name: 'Woof', weight: 8, birthDate: new Date(2011, 8, 12)},
  {name: 'Chuck', weight: 28, birthDate: new Date(2015, 5, 6)},
  {name: 'Barkley', weight: 4, birthDate: new Date(2012, 3, 15)},
  {name: 'Prince', weight: 65, birthDate: new Date(2017, 5, 4)}
  ];

@Injectable()
export class DogDataService {

  constructor() { }
  getDogs() {
  	return DOGS;
  }
  getDogsPie(){
    var pieResult=[];
    for (let dog of DOGS) {
      var point = {
        "name": dog.name,
        "value": dog.weight
      }
      pieResult.push(point)
    }
  
  return pieResult;

  }
}
