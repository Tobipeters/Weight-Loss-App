import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  @Input() isArrowBack: boolean = false;

  @Output() goback: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleBack() {
    this.goback.emit();
  }
}
