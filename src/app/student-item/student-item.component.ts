import { Component, Input, OnInit } from '@angular/core';
import { home } from '../home/home.model';
import { HomeServices } from '../home/home.service';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss'],
})
export class StudentItemComponent implements OnInit {
  @Input() studentItem : home;

  constructor(private studentservice : HomeServices) { }

  ngOnInit() {}

}
