import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {OrderComponent} from './order.component';
import {VexRoutes} from '../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}
