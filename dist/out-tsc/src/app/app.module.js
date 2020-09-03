import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { ColorComponent } from './color/color.component';
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListsComponent } from './cvTech/lists/lists.component';
import { ItemComponent } from './cvTech/item/item.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { StyleComponent } from './directives/style/style.component';
import { ClassComponent } from './directives/class/class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { PremierService } from './premier.service';
import { CvService } from './cvTech/cv.service';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetComponent } from './cvTech/det/det.component';
import { AddComponent } from './cvTech/add/add.component';
import { DeleteComponent } from './cvTech/delete/delete.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { loginInterceptorProvider } from './interceptors/login.interceptor';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';
import { UpdateComponent } from './cvTech/update/update.component';
import { SearchComponent } from './search/search.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            ChildAComponent,
            ChildBComponent,
            GrandChildComponent,
            ColorComponent,
            FilsComponent,
            CvComponent,
            ListsComponent,
            ItemComponent,
            DetailComponent,
            StyleComponent,
            ClassComponent,
            HighlightDirective,
            RainbowDirective,
            EmbaucheComponent,
            HeaderComponent,
            RouterSimulatorComponent,
            DetComponent,
            AddComponent,
            DeleteComponent,
            ErrorComponent,
            LoginComponent,
            HttpComponent,
            UpdateComponent,
            SearchComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            ROUTING,
            HttpClientModule
        ],
        providers: [PremierService, CvService, loginInterceptorProvider, LoginGuard, LogoutGuard],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map