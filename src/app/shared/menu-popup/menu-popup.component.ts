import { Component, OnInit } from '@angular/core';
import {  MatDialog } from '@angular/material/dialog';
import { AddWeightComponent } from '../add-weight/add-weight.component';

@Component({
  selector: 'app-menu-popup',
  templateUrl: './menu-popup.component.html',
  styleUrls: ['./menu-popup.component.scss'],
})
export class MenuPopupComponent implements OnInit {
  menuItems: any[] = [
    {
      iconName: 'favorite',
      title: 'Add blood pressuree',
    },
    {
      iconName: 'note_alt',
      title: 'Add weight measurement',
    },
    {
      iconName: 'directions_bike',
      title: 'Add activity',
    },
    {
      iconName: 'watch',
      title: 'Track my workout',
    },
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {

  }

openDialog(){
  this.dialog.open(AddWeightComponent, {
    panelClass: 'fullpage-popup'
  })
}
}
