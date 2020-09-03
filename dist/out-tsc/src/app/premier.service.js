import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let PremierService = class PremierService {
    constructor() { }
    logger(data) {
        console.log(data);
    }
};
PremierService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PremierService);
export { PremierService };
//# sourceMappingURL=premier.service.js.map