import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ListsComponent = class ListsComponent {
    constructor() {
        this.selectedPersonne = new EventEmitter();
    }
    ngOnInit() {
    }
    selectPersonne(selectPersonne) {
        this.selectedPersonne.emit(selectPersonne);
    }
};
__decorate([
    Input()
], ListsComponent.prototype, "personnes", void 0);
__decorate([
    Output()
], ListsComponent.prototype, "selectedPersonne", void 0);
ListsComponent = __decorate([
    Component({
        selector: 'app-lists',
        templateUrl: './lists.component.html',
        styleUrls: ['./lists.component.scss']
    })
], ListsComponent);
export { ListsComponent };
//# sourceMappingURL=lists.component.js.map