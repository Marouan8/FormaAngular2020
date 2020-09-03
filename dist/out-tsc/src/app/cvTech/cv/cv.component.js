import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CvComponent = class CvComponent {
    constructor(cvService) {
        this.cvService = cvService;
    }
    ngOnInit() {
        this.cvService.getPersonnes().subscribe((personnes) => {
            this.personnes = personnes;
        }, (error) => {
            alert('les données sont fakes');
            this.personnes = this.cvService.getFakePersonnes();
        });
    }
    selectPersonne(personne) {
        this.selectedPersonne = personne;
    }
};
CvComponent = __decorate([
    Component({
        selector: 'app-cv',
        templateUrl: './cv.component.html',
        styleUrls: ['./cv.component.scss']
    })
], CvComponent);
export { CvComponent };
//# sourceMappingURL=cv.component.js.map