import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
  // providers: [SideNavService]
})
export class DrawerComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  @Input() sidenavLayout: any;
  constructor(private sideNavService: SideNavService) {
    // this.sidenav.open();
  }

  ngOnInit() {
    this.sideNavService.setSidenav(this.sidenav);
    console.log('drawer ', this.sideNavService);
    // this.sidenav.opened = true;
  }
}
