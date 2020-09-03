import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let DetailComponent = class DetailComponent {
    constructor(embaucheService, router) {
        this.embaucheService = embaucheService;
        this.router = router;
    }
    ngOnInit() {
    }
    embaucher() {
        this.embaucheService.embaucher(this.personne);
    }
    moreInfo() {
        const link = ['cv', this.personne.id];
        this.router.navigate(link);
    }
};
__decorate([
    Input()
], DetailComponent.prototype, "personne", void 0);
DetailComponent = __decorate([
    Component({
        selector: 'app-detail',
        templateUrl: './detail.component.html',
        styleUrls: ['./detail.component.scss']
    })
], DetailComponent);
export { DetailComponent };
//# sourceMappingURL=detail.component.js.map