import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AddComponent = class AddComponent {
    constructor(cvService, router) {
        this.cvService = cvService;
        this.router = router;
    }
    ngOnInit() {
    }
    addPersonne(formulaire) {
        this.cvService.addPersonne(formulaire.value).subscribe((reponse) => {
            const link = ['cv'];
            this.router.navigate(link);
        }, (error) => {
            console.log(error);
        });
    }
};
AddComponent = __decorate([
    Component({
        selector: 'app-add',
        templateUrl: './add.component.html',
        styleUrls: ['./add.component.scss']
    })
], AddComponent);
export { AddComponent };
//# sourceMappingURL=add.component.js.map