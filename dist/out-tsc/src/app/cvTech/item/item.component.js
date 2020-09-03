import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ItemComponent = class ItemComponent {
    constructor() {
        this.selectedPersonne = new EventEmitter();
    }
    ngOnInit() {
    }
    selectPersonne() {
        this.selectedPersonne.emit(this.personne);
    }
};
__decorate([
    Input()
], ItemComponent.prototype, "personne", void 0);
__decorate([
    Output()
], ItemComponent.prototype, "selectedPersonne", void 0);
ItemComponent = __decorate([
    Component({
        selector: 'app-item',
        templateUrl: './item.component.html',
        styleUrls: ['./item.component.scss']
    })
], ItemComponent);
export { ItemComponent };
//# sourceMappingURL=item.component.js.map