import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
})
export class NewCourseFormComponent {
  courseCategories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Arts' },
    { id: 3, name: 'Science' },
  ];
  submit(f) {
    console.log(f);
  }
}
