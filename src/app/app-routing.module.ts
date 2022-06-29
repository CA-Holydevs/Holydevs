import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnexionComponent} from './connexion/connexion.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {FirstConnexionComponent} from   './first-connexion/first-connexion.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { CardParticipantComponent } from './card-participant/card-participant.component';
import { CalenderComponent } from './calender/calender.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuModuleComponent } from './menu-module/menu-module.component';
import { InfoModuleComponent } from './info-module/info-module.component'
import { CardModuleComponent } from './card-module/card-module.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { QRcodeComponent } from './qrcode/qrcode.component';
import { MenuSessionComponent } from './menu-session/menu-session.component';
import { ListeDesParticipantsComponent } from './liste-des-participants/liste-des-participants.component';
import { SignatureComponent } from './signature/signature.component';

const routes: Routes = [
  { path: 'my-account',
    component: MyAccountComponent
  },
  { path: 'connexion',
    component: ConnexionComponent
  },
  { path: 'module-list',
    component: ModuleListComponent
  },
  { path: 'first-connexion',
    component: FirstConnexionComponent
  },
  { path: 'card-participant',
    component: CardParticipantComponent //TODO: Remove this route
  },
  { path: 'card-module',
    component: CardModuleComponent //TODO: Remove this route
  },
  { path: 'calender',
    component: CalenderComponent  //TODO: Remove this route
  },
  { path: 'signature',
    component: SignatureComponent  //TODO: Remove this route
  },
  { path: 'social-links',
    component: SocialLinksComponent
  },
  { path: 'menu-module',
    component: MenuModuleComponent
  },
  { path: 'menu-session',
    component: MenuSessionComponent
  },
  { path: 'dashboard',
    component: DashboardComponent,
    // children : [
    //   {path: 'profile'},
    //   {path: 'module'},
    //   {path: 'qrcode'},
    // ]
  },
  {
    path: 'info-module',
    component: InfoModuleComponent
  },
  {
    path: 'qrcode',
    component: QRcodeComponent
  },
  {
    path: 'liste-des-participants',
    component: ListeDesParticipantsComponent
  },
  { path: '',   redirectTo: '/connexion', pathMatch: 'full' },
  { path: '**', component:  ConnexionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
