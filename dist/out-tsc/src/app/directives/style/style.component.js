import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let StyleComponent = class StyleComponent {
    constructor() {
        this.size = '25px';
    }
    ngOnInit() {
    }
    changeSize(input) {
        this.size = input + 'px';
    }
};
__decorate([
    Input()
], StyleComponent.prototype, "color", void 0);
__decorate([
    Input()
], StyleComponent.prototype, "bgColor", void 0);
StyleComponent = __decorate([
    Component({
        selector: 'app-style',
        templateUrl: './style.component.html',
        styleUrls: ['./style.component.scss']
    })
], StyleComponent);
export { StyleComponent };
//# sourceMappingURL=style.component.js.map