import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { FooterComponent } from './footer/footer.component';

const routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "sign-up",
    loadChildren: () =>
      import("./pages/sign-up/sign-up.module").then((m) => m.SignUpModule),
  },
  {
    path: "sign-up2",
    loadChildren: () =>
      import("./pages/sign-up2/sign-up2.module").then((m) => m.SignUp2Module),
  },
  {
    path: "sign-up3",
    loadChildren: () =>
      import("./pages/sign-up3/sign-up3.module").then((m) => m.SignUp3Module),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "my-courses",
    loadChildren: () =>
      import("./pages/my-courses/my-courses.module").then(
        (m) => m.MyCoursesModule
      ),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfileModule),
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./pages/settings/settings.module").then((m) => m.SettingsModule),
  },
  {
    path: "privacy",
    loadChildren: () =>
      import("./pages/privacy/privacy.module").then((m) => m.PrivacyModule),
  },
  {
    path: "security",
    loadChildren: () =>
      import("./pages/security/security.module").then((m) => m.SecurityModule),
  },
  {
    path: "payment-methods",
    loadChildren: () =>
      import("./pages/payment-methods/payment-methods.module").then(
        (m) => m.PaymentMethodsModule
      ),
  },
  {
    path: "more",
    loadChildren: () =>
      import("./pages/more/more.module").then((m) => m.MoreModule),
  },
  {
    path: "course-content",
    loadChildren: () =>
      import("./pages/course-content/course-content.module").then(
        (m) => m.CourseContentModule
      ),
  },
  {
    path: "course-view",
    loadChildren: () =>
      import("./pages/course-view/course-view.module").then(
        (m) => m.CourseViewModule
      ),
  },
  {
    path: "social-media",
    loadChildren: () =>
      import("./pages/social-media/social-media.module").then(
        (m) => m.SocialMediaModule
      ),
  },
  {
    path: "map",
    loadChildren: () =>
      import("./pages/map/map.module").then((m) => m.MapModule),
  },
];

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ComponentsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
