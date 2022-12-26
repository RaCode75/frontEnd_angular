import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  @Input() list: number[] = [1,2,3];
  constructor() { }

  ngOnInit(): void {
  }

}
