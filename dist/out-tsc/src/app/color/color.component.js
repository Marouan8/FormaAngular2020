import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ColorComponent = class ColorComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.color = 'red';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.color = params['default'];
        });
    }
    get(message) {
        alert(message);
    }
    goToCv() {
        const link = ['cv'];
        this.router.navigate(link);
    }
};
ColorComponent = __decorate([
    Component({
        selector: 'app-color',
        templateUrl: './color.component.html',
        styleUrls: ['./color.component.scss']
    })
], ColorComponent);
export { ColorComponent };
//# sourceMappingURL=color.component.js.map