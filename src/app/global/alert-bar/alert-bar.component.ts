import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-bar',
  templateUrl: './alert-bar.component.html',
  styleUrls: ['./alert-bar.component.scss'],
})
export class AlertBarComponent implements OnInit {
  @Input() mode: 'warning' | 'info' | 'success' | 'danger' = 'info';
  @Input() appLevel: boolean = false;
  @Input() display: boolean = true;
  @Input() closable: boolean = true;
  @Input() bold: boolean = false;
  @Input() italic: boolean = false;
  @Input() text: string = '';
  constructor() {}

  ngOnInit(): void {}
  closeAlert = () => {
    this.display = false;
  }
}
