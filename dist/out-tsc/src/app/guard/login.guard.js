export class LoginGuard {
    canActivate(route, state) {
        const token = localStorage.getItem('token');
        return (!!token);
    }
}
//# sourceMappingURL=login.guard.js.map