import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(authentificationService) {
        this.authentificationService = authentificationService;
        this.visibility = false;
    }
    ngOnInit() {
    }
    logout() {
        this.authentificationService.logout();
    }
    show() {
        this.visibility = !this.visibility;
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map