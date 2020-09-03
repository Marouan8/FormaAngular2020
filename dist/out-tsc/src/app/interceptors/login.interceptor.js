import { HTTP_INTERCEPTORS, HttpParams } from '@angular/common/http';
export class LoginInterceptor {
    intercept(req, next) {
        const token = localStorage.getItem('token');
        if (token) {
            const keys = (req.params.keys());
            let params = new HttpParams();
            for (let index = 0; index < keys.length; index++) {
                params = params.append(keys[index], req.params.get(keys[index]));
            }
            params = params.append('access_token', token);
            const cloneReq = req.clone({ params });
            return next.handle(cloneReq);
        }
        else {
            return next.handle(req);
        }
    }
}
export const loginInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: LoginInterceptor,
    multi: true
};
//# sourceMappingURL=login.interceptor.js.map