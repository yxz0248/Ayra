import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {
  
  events: string[] = [];
  opened: boolean;

  constructor() { }

  ngOnInit() {
  }

}
