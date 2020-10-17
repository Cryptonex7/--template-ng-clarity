import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  @Input() message: string = 'Woops! 404: Page Not Found!';
  constructor() {}

  ngOnInit(): void {}
}
