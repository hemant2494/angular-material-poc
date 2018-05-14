import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-splitsyllabus',
  templateUrl: './splitsyllabus.component.html',
  styleUrls: ['./splitsyllabus.component.css']
})
export class SplitsyllabusComponent implements OnInit {
  displayedColumns = ['period','ctr', 'class', 'section', 'chapter','subtopic','Homework'];
  school = [
    {value: 'steak-0', viewValue: 'class'},
    {value: 'pizza-1', viewValue: 'revision'},
    {value: 'tacos-2', viewValue: 'test Class'},
    {value: 'test', viewValue: 'select Subject'},
    {value: 'test1', viewValue: 'sub-Test'}

  ];

  constructor() { }

  ngOnInit() {
  }

}
