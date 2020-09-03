import { __decorate } from "tslib";
import { Directive, HostBinding, HostListener } from '@angular/core';
let RainbowDirective = class RainbowDirective {
    constructor() {
        this.tableau = [
            'blue',
            'lightblue',
            'coral',
            'pink',
            'green',
            'lightyellow',
            'lightgreen',
            'gold',
            'gray',
            'lightgray',
            'purple'
        ];
    }
    changeColor() {
        const index = Math.floor(Math.random() * (this.tableau.length - 1));
        this.bc = this.tableau[index];
        this.color = this.tableau[index];
    }
};
__decorate([
    HostBinding('style.borderColor')
], RainbowDirective.prototype, "bc", void 0);
__decorate([
    HostBinding('style.color')
], RainbowDirective.prototype, "color", void 0);
__decorate([
    HostListener('keypress')
], RainbowDirective.prototype, "changeColor", null);
RainbowDirective = __decorate([
    Directive({
        selector: '[appRainbow]'
    })
], RainbowDirective);
export { RainbowDirective };
//# sourceMappingURL=rainbow.directive.js.map