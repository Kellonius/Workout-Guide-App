import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private RouterModule: Router) { }

  ngOnInit() {
  }

  navigate(page: string){
    this.RouterModule.navigate(['./'+ page]);
  }

}
