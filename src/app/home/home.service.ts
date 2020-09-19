

import { Injectable } from '@angular/core';
import { home} from './home.model';

@Injectable({
    providedIn : 'root'
}) 
export class HomeServices {
    private student :  home[] = [{
        id : "s1",
        enrollment : "201606100110042",
        marks : ['50','60','70']
    },
    {
        id : "s2",
        enrollment : "201606100110076",
        marks : ['60','60','70']
    }]

    constructor() { }

    getAllStudent(){
        return [...this.student];
    }
    getStudent(studentId : string)
    {
      return{
        ...this.student.find(student => {
          return student.id === studentId;
        }),
      };
    }
}
