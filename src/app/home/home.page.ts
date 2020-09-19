import { Component } from '@angular/core';
import { from } from 'rxjs';
import { home } from './home.model';
import { HomeServices } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  student : home[];


  constructor(private studentservice : HomeServices) {}
  
  ngOninit(){
    this.student = this.studentservice.getAllStudent();
  }
  ionViewWillEnter(){
    this.student = this.studentservice.getAllStudent();
  }
}
