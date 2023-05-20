import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculServiceService {

  constructor() { }

  getNumberOf(list:any[], critiria:string, value:any){
    return list.filter(item => item[critiria] === value).length;
  }
}
