import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-weight',
  templateUrl: './add-weight.component.html',
  styleUrls: ['./add-weight.component.scss']
})
export class AddWeightComponent implements OnInit {
  title:string = "Add Weight"

  constructor() { }

  ngOnInit(): void {
  }

}
