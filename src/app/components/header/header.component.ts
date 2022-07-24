import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  constructor() {}

  /* 
    ngOnInit() is a lifecycle method that runs whenever the component loads similar to 
    useEffect or componentDidMount() in react
  */

  ngOnInit(): void {}

  toggleAddTask(): void {
    console.log('Calling from the header');
  }
}
