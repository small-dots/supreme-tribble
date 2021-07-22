/*
 * @Desc:
 * @Author: 安忠琪
 * @LastEditTime: 2021-07-21 17:59:00
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome.component.html',
})
export class WelcomePageComponent implements OnInit {
    ngOnInit(): void {
        console.log('angular component init!');
    }
}
