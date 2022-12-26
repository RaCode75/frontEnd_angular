import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardv',
  templateUrl: './cardv.component.html',
  styleUrls: ['./cardv.component.scss']
})
export class CardvComponent implements OnInit {
@Input() data: number= 0;
 // constructor() { }

  ngOnInit(): void {
  }

}
