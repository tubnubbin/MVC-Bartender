import { Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';

export const AppRoutes: Routes = [
  { path: 'index',
    component: IndexComponent
  },
  { path: 'menu',
    component: MenuComponent
  },
  { path: 'orders',
    component: OrdersComponent
  },
];
