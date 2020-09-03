import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UpdateComponent = class UpdateComponent {
    constructor(activatedRoute, cvService, router) {
        this.activatedRoute = activatedRoute;
        this.cvService = cvService;
        this.router = router;
        this.personne = null;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.cvService.getPersonneById(params.id).subscribe((personne) => {
                this.personne = personne;
            });
        });
    }
    updatePersonne() {
        this.cvService.updatePersonne(this.personne).subscribe((reponse) => {
            const link = ['cv'];
            this.router.navigate(link);
        });
    }
};
UpdateComponent = __decorate([
    Component({
        selector: 'app-update',
        templateUrl: './update.component.html',
        styleUrls: ['./update.component.scss']
    })
], UpdateComponent);
export { UpdateComponent };
//# sourceMappingURL=update.component.js.map