import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { WrapperComponent } from './pages/wrapper/wrapper.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { SidenavComponent } from './pages/sidebar/sidenav.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { ContentComponent } from './pages/content/content.component';
import { FieldComponent } from './pages/field/field.component';
import { LobbyComponent } from './pages/lobby/lobby.component';

const layoutComponent = [
  WrapperComponent,
  ToolbarComponent,
  SidenavComponent,
  FooterComponent,
  HeaderComponent,
  ContentComponent,
  FieldComponent
]

@NgModule({
  declarations: [...layoutComponent, LobbyComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [...layoutComponent, MaterialModule]
})
export class LayoutsModule { }
