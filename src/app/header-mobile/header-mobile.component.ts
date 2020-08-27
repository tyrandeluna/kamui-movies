import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements OnInit {
  route: Router

  constructor(router: Router, private location: Location) {
    this.route = router
  }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back()
  }
}
