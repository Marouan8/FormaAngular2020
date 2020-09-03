export class LogoutGuard {
    canActivate(route, state) {
        const token = localStorage.getItem('token');
        if (token) {
            return false;
        }
        else {
            return true;
        }
    }
}
//# sourceMappingURL=logout.guard.js.map