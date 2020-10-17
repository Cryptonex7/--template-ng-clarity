import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.scss'],
})
export class SideDrawerComponent implements OnInit {
  @Input() tabs: string[] = [];
  @Input() structure: { string?: string[] } = {};

  constructor() {}

  ngOnInit(): void {}
}
