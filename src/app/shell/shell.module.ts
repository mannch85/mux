import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '@app/shared';
import { DrawerComponent } from './drawer/drawer.component';

@NgModule({
  imports: [MaterialModule, CommonModule, TranslateModule, NgbModule, RouterModule],
  declarations: [HeaderComponent, ShellComponent, SidenavComponent, DrawerComponent]
})
export class ShellModule {}
