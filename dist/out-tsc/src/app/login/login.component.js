import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(authentificationService, router) {
        this.authentificationService = authentificationService;
        this.router = router;
    }
    ngOnInit() {
    }
    login(credentials) {
        this.authentificationService.login(credentials).subscribe((reponse) => {
            ;
            const link = ['cv'];
            localStorage.setItem('token', reponse['id']);
            this.router.navigate(link);
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map