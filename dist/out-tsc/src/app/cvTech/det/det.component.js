import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DetComponent = class DetComponent {
    constructor(cvService, activatedRoute, router) {
        this.cvService = cvService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.cvService.getPersonneById(params.id).subscribe((personne) => {
                this.personne = personne;
            });
        });
    }
    deletePersonne() {
        this.cvService.deletePersonne(this.personne.id).subscribe((reponse) => {
            const link = ['cv'];
            this.router.navigate(link);
        });
    }
    updatePersonne(id) {
        const link = ['cv/updatecv', id];
        this.router.navigate(link);
    }
};
DetComponent = __decorate([
    Component({
        selector: 'app-det',
        templateUrl: './det.component.html',
        styleUrls: ['./det.component.scss']
    })
], DetComponent);
export { DetComponent };
//# sourceMappingURL=det.component.js.map