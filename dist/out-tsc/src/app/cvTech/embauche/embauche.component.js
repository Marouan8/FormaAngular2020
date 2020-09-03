import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EmbaucheComponent = class EmbaucheComponent {
    constructor(embaucheService) {
        this.embaucheService = embaucheService;
    }
    ngOnInit() {
        this.personnes = this.embaucheService.getEmbauchees();
    }
};
EmbaucheComponent = __decorate([
    Component({
        selector: 'app-embauche',
        templateUrl: './embauche.component.html',
        styleUrls: ['./embauche.component.scss']
    })
], EmbaucheComponent);
export { EmbaucheComponent };
//# sourceMappingURL=embauche.component.js.map