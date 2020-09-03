import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';
import { HttpParams } from '@angular/common/http';
let CvService = class CvService {
    constructor(http) {
        this.http = http;
        this.link = 'http://localhost:3000/api/personnes';
        this.personnes = [
            new Personne(1, 'ronaldo', 'cristiano', 26, 'cr.jpg', 1111, 'player'),
            new Personne(2, 'messi', 'lionel', 32, 'lm.jpg', 222, 'player')
        ];
    }
    getPersonnes() {
        return this.http.get(this.link);
    }
    getFakePersonnes() {
        return this.personnes;
    }
    getPersonneById(id) {
        return this.http.get(this.link + `/${id}`);
    }
    addPersonne(personne) {
        // const token = localStorage.getItem('token');
        // if(token) {
        //   const params = new HttpParams().set('access_token',token);
        //   return this.http.post(this.link, personne, {params});
        // }
        return this.http.post(this.link, personne);
    }
    deletePersonne(id) {
        return this.http.delete(this.link + `/${id}`);
    }
    updatePersonne(personne) {
        console.log(personne);
        return this.http.put(this.link, personne);
    }
    findByName(name) {
        const filter = `{"where": {"name": {"like":"%${name}%"}}}`;
        const params = new HttpParams().set('filter', filter);
        return this.http.get(this.link, { params });
    }
};
CvService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CvService);
export { CvService };
//# sourceMappingURL=cv.service.js.map