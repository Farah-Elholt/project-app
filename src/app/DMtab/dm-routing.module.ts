import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dmPage } from './dm.page';

const routes: Routes = [
  {
    path: '',
    component: dmPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class dmPageRoutingModule {}
