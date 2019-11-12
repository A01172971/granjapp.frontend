import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public ref: string = "";
  private router: Router;

  constructor() { 
    
  }

  ngOnInit() {
    this.ref = this.router.url;
  }

}
