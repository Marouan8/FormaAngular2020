import { __decorate } from "tslib";
import { Directive, HostBinding, HostListener } from '@angular/core';
let HighlightDirective = class HighlightDirective {
    constructor() {
        this.bg = 'red';
    }
    mouseenter() {
        this.bg = 'yellow';
    }
    mouseleave() {
        this.bg = 'red';
    }
};
__decorate([
    HostBinding('style.backgroundColor')
], HighlightDirective.prototype, "bg", void 0);
__decorate([
    HostListener('mouseenter')
], HighlightDirective.prototype, "mouseenter", null);
__decorate([
    HostListener('mouseleave')
], HighlightDirective.prototype, "mouseleave", null);
HighlightDirective = __decorate([
    Directive({
        selector: '[appHighlight]'
    })
], HighlightDirective);
export { HighlightDirective };
//# sourceMappingURL=highlight.directive.js.map