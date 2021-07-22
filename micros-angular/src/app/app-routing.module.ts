/*
 * @Desc:
 * @Author: 安忠琪
 * @LastEditTime: 2021-07-21 17:53:44
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { WelcomePageComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent }
];
console.log((window as any).__POWERED_BY_QIANKUN__);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // @ts-ignore
  providers: [{ provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/angular' : '/' }]
})
export class AppRoutingModule { }
