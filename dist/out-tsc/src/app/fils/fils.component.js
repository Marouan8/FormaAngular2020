import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let FilsComponent = class FilsComponent {
    constructor() {
        this.send = new EventEmitter();
    }
    ngOnInit() {
    }
    sendEvent() {
        this.send.emit('please can i have some money');
    }
};
__decorate([
    Input()
], FilsComponent.prototype, "filsProperty", void 0);
__decorate([
    Output()
], FilsComponent.prototype, "send", void 0);
FilsComponent = __decorate([
    Component({
        selector: 'app-fils',
        templateUrl: './fils.component.html',
        styleUrls: ['./fils.component.scss']
    })
], FilsComponent);
export { FilsComponent };
//# sourceMappingURL=fils.component.js.map