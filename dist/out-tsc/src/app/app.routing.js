import { RouterModule } from '@angular/router';
import { CvComponent } from './cvTech/cv/cv.component';
import { ColorComponent } from './color/color.component';
import { DetComponent } from './cvTech/det/det.component';
import { AddComponent } from './cvTech/add/add.component';
import { DeleteComponent } from './cvTech/delete/delete.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';
import { UpdateComponent } from './cvTech/update/update.component';
const APP_ROUTING = [
    { path: 'cv', children: [
            { path: '', component: CvComponent },
            { path: 'updatecv/:id', component: UpdateComponent },
            { path: 'add', component: AddComponent, canActivate: [LoginGuard] },
            { path: 'delete/:id', component: DeleteComponent, canActivate: [LoginGuard] },
            { path: ':id', component: DetComponent },
        ] },
    { path: 'color/:default', component: ColorComponent },
    { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
    { path: '**', component: ErrorComponent }
];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
//# sourceMappingURL=app.routing.js.map