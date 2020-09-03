import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ClassComponent = class ClassComponent {
    constructor() {
        this.est = false;
        this.milan = false;
        this.barca = false;
    }
    ngOnInit() {
    }
    changeTeam() {
        this.est = true;
    }
};
ClassComponent = __decorate([
    Component({
        selector: 'app-class',
        templateUrl: './class.component.html',
        styleUrls: ['./class.component.scss']
    })
], ClassComponent);
export { ClassComponent };
//# sourceMappingURL=class.component.js.map