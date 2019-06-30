import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatGridListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';
import { DataService } from './services/data.service';
import { CordovaService } from './services/cordova.service';
import { LocalStoragePersistenceService } from './services/local-storage-persistence.service';
import { SyncService } from './services/sync.service';

const appRoutes: Routes = [  
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatGridListModule ],
  declarations: [ AppComponent, HomeComponent, LoginComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthGuard, DataService, CordovaService, LocalStoragePersistenceService, SyncService]
})
export class AppModule { }
