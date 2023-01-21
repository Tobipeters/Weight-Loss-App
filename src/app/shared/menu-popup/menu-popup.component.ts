import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

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

  constructor(private dialogRef: MatDialogRef<any>) {}

  ngOnInit(): void {
    
  }

  changePosition() {
    this.dialogRef.updatePosition({ top: '50px', left: '50px' });
  }
}
