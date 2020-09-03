import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SearchComponent = class SearchComponent {
    constructor(cvService, router) {
        this.cvService = cvService;
        this.router = router;
        this.chaine = '';
    }
    ngOnInit() {
        this.searchResult = [];
    }
    search() {
        const name = this.chaine.trim();
        if (name.length) {
            this.cvService.findByName(name).subscribe((personnes) => {
                console.log(personnes);
                this.searchResult = personnes;
            });
        }
        else {
            this.searchResult = [];
        }
    }
    selectPersonne(personne) {
        const link = ['cv', personne.id];
        this.router.navigate(link);
        this.searchResult = [];
        this.chaine = '';
    }
};
SearchComponent = __decorate([
    Component({
        selector: 'app-search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.scss']
    })
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=search.component.js.map