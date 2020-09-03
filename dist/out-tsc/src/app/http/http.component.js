import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HttpComponent = class HttpComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((response) => {
            console.log('response', response);
        }, (error) => {
            console.log('error', error);
        }, () => {
            console.log('completed');
        });
    }
};
HttpComponent = __decorate([
    Component({
        selector: 'app-http',
        templateUrl: './http.component.html',
        styleUrls: ['./http.component.scss']
    })
], HttpComponent);
export { HttpComponent };
//# sourceMappingURL=http.component.js.map