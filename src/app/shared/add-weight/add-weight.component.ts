import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-weight',
  templateUrl: './add-weight.component.html',
  styleUrls: ['./add-weight.component.scss'],
})
export class AddWeightComponent implements OnInit {
  title: string = 'Add Weight';
  gridsize: any = 30;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  updateSetting(event: any) {
    this.gridsize = event.value;
  }

  handleGoBack() {
    this.dialog.closeAll();
  }

  replaceDotWithComma(value: number) {
    return `${value}`.replace(/\./g, ',');
  }
}
