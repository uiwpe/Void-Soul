import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from "./shared/layouts/pages/lobby/lobby.component";
import { WrapperComponent } from "./shared/layouts/pages/wrapper/wrapper.component";


const routes: Routes = [
  {path: '', redirectTo: 'lobby', pathMatch: 'full'},
  {
    path: '', component: WrapperComponent, children: [
      {path: 'lobby', component: LobbyComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
