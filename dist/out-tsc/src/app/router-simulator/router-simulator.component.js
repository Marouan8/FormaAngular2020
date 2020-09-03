import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RouterSimulatorComponent = class RouterSimulatorComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToComponent(route) {
        const link = [route];
        this.router.navigate(link);
    }
};
RouterSimulatorComponent = __decorate([
    Component({
        selector: 'app-router-simulator',
        templateUrl: './router-simulator.component.html',
        styleUrls: ['./router-simulator.component.scss']
    })
], RouterSimulatorComponent);
export { RouterSimulatorComponent };
//# sourceMappingURL=router-simulator.component.js.map