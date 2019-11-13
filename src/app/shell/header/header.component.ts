import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor(private sidenav: SideNavService) {}

  ngOnInit() {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
