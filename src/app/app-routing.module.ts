import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// import { AboutusComponent } from './shared/aboutus.component';
// import { SettingsComponent } from './shared/settings/settings.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/login/signup.component';
// import { AuthGuardService } from './services/auth-guard.service';
// import { NavAuthGuardService } from './services/nav-auth-guard.service';
// import { StudentComponent } from './manage/student.component';
// import { StudentViewComponent } from './manage/student-view.component';


const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },

  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  // { path: 'aboutus', component: AboutusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // { path: 'input-user-data', component: InputUserDataFormComponent },
  // { path: 'user/:uid', component: DisplayUserDataComponent },
  // { path: 'student', component: StudentComponent },
  // { path: 'student-view', component: StudentViewComponent, canActivate: [] }
  { path: '**', redirectTo: '/aboutus', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
