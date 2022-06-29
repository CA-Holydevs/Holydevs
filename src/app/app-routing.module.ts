import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnexionComponent} from './connexion/connexion.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {FirstConnexionComponent} from   './first-connexion/first-connexion.component';
import { StructPrincipaleComponent } from './struct-principale/struct-principale.component';
import { CardParticipantComponent } from './card-participant/card-participant.component';
import { CalenderComponent } from './calender/calender.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
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
  { path: 'calender',
    component: CalenderComponent  //TODO: Remove this route
  },
  { path: 'struct-principale',
    component: StructPrincipaleComponent
  },
  { path: 'dashboard',
    component: DashboardComponent,
    // children : [
    //   {path: 'profile'},
    //   {path: 'module'},
    //   {path: 'qrcode'},
    // ]
  },
  { path: '',   redirectTo: '/connexion', pathMatch: 'full' },
  { path: '**', component:  ConnexionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
