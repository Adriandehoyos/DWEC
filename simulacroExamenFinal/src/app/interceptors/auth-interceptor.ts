import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
        const cloneRequest = req.clone({
        setHeaders: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token") || ""
        }
    });

    if (cloneRequest.url.includes("login")) { //en esta linea tambien se podria tener que cambiar dependiendo del back
        return next(req);
    }
    else {
        return next(cloneRequest);
    };
};