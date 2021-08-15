import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'payment',
        children: [
          {
            path: '',
            loadChildren: () => import('../payment/payment.module').then(m => m.PaymentPageModule)
          }

        ]
      }, {
        path: 'payment-edit/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('../payment/payment.module').then(m => m.PaymentPageModule)
          }

        ]
      }, {
        path: 'sales',
        children: [
          {
            path: '',
            loadChildren: () => import('../sells/sells.module').then(m => m.SellsPageModule)
          }

        ]
      }, {
        path: 'sales-edit/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('../sells/sells.module').then(m => m.SellsPageModule)
          }

        ]
      }, {
        path: 'feeds',
        children: [
          {
            path: '',
            loadChildren: () => import('../feed/feed.module').then(m => m.FeedPageModule)
          }
        ]
      }, {
        path: 'sales-history',
        children: [
          {
            path: '',
            loadChildren: () => import('../sales-history/sales-history.module').then(m => m.SalesHistoryPageModule)
          }
        ]
      }, {
        path: 'payment-history',
        children: [
          {
            path: '',
            loadChildren: () => import('../payment-history/payment-history.module').then(m => m.PaymentHistoryPageModule)
          }
        ]
      },
      {
        path: 'printer-setting',
        children: [
          {
            path: '',
            loadChildren: () => import('../printer-setting/printer-setting.module').then(m => m.PrinterSettingPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/feeds',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
