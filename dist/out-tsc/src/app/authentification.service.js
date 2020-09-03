import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthentificationService = class AuthentificationService {
    constructor(http) {
        this.http = http;
        this.link = 'http://localhost:3000/api/Users/login';
    }
    isLogged() {
        return !!localStorage.getItem('token');
    }
    login(credentials) {
        return this.http.post(this.link, credentials);
    }
    logout() {
        localStorage.removeItem('token');
    }
};
AuthentificationService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthentificationService);
export { AuthentificationService };
//# sourceMappingURL=authentification.service.js.map