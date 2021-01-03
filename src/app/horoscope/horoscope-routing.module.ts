import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoroscopePage } from './horoscope.page';

const routes: Routes = [
  {
    path: '',
    component: HoroscopePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoroscopePageRoutingModule {}
