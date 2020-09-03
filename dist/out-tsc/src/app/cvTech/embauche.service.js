import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let EmbaucheService = class EmbaucheService {
    constructor() {
        this.personnes = [];
    }
    getEmbauchees() {
        return this.personnes;
    }
    embaucher(personne) {
        const index = this.personnes.indexOf(personne);
        if (index < 0) {
            this.personnes.push(personne);
        }
        else {
            alert(`${personne.name} est déjà sélectionée`);
        }
    }
    debaucher(personne) {
        const index = this.personnes.indexOf(personne);
        if (index >= 0) {
            this.personnes.slice(index, 1);
        }
    }
};
EmbaucheService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], EmbaucheService);
export { EmbaucheService };
//# sourceMappingURL=embauche.service.js.map