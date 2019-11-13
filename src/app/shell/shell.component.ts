import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  @Output() sidenavLayoutToggle = new EventEmitter<boolean>();
  openMenu = false;
  constructor() {}

  ngOnInit() {}
  clickMenu() {
    this.openMenu = !this.openMenu;
    this.sidenavLayoutToggle.emit(this.openMenu);
  }
}
