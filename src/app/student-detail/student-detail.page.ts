import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { home } from '../home/home.model';

import { HomeServices } from '../home/home.service';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.page.html',
  styleUrls: ['./student-detail.page.scss'],
})
export class StudentDetailPage implements OnInit {

  loadedstudent : home;

  constructor(private router : Router,private activateRouter : ActivatedRoute,private studentservice : HomeServices) { }

  ngOnInit() {
    this.activateRouter.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('studentId')){
        return;
      }
      const recipeId = paramMap.get('studentId');
      this.loadedstudent = this.studentservice.getStudent(recipeId);

      if(!this.loadedstudent.id){
        this.router.navigate(['home']);

      }
    })
  }

}
