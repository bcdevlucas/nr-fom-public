import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { throwError } from 'rxjs';

// modules
import { SharedModule } from 'app/shared.module';
import { AppRoutingModule } from 'app/app-routing.module';
import { ApplicationsModule } from 'app/applications/applications.module';

// components
import { HomeProxyComponent } from 'app/home-proxy.component';
import { ApplicationsProxyComponent } from 'app/applications-proxy.component';
import { AppComponent } from 'app/app.component';
import { CommentModalComponent } from 'app/comment-modal/comment-modal.component';
import { ContactComponent } from 'app/contact/contact.component';
import { FileUploadComponent } from 'app/file-upload/file-upload.component';
import { HeaderComponent } from 'app/header/header.component';
import { AboutComponent } from 'app/about/about.component';
import { FooterComponent } from 'app/footer/footer.component';

// services
import { ApiService } from 'core/services/api';
import { ApplicationService } from 'core/services/application.service';
import { CommentService } from 'core/services/comment.service';
import { CommentPeriodService } from 'core/services/commentperiod.service';
import { DecisionService } from 'core/services/decision.service';
import { DocumentService } from 'core/services/document.service';
import { FeatureService } from 'core/services/feature.service';
import { UrlService } from 'core/services/url.service';
import { KeycloakService } from 'core/services/keycloak.service';

import { ApiModule, Configuration } from 'core/api';

export function kcFactory(keycloakService: KeycloakService) {
  return () => keycloakService.init();
}

// this.jwtHelper = new JwtHelperService();
const currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
// @ts-ignore
const token = currentUser && currentUser.token;
// @ts-ignore
const isMS = !!window.navigator.msSaveOrOpenBlob;

// In index.html we load a javascript file with environment-specific settings,
// populated from mounted ConfigMap in OpenShift. This file sets window.localStorage settings
// Locally, this will be empty and local defaults will be used.

const envName = window.localStorage.getItem('fom_environment_name');
// @ts-ignore
const env = (envName == undefined || envName.length == 0) ? 'local' : envName;
let apiBasePath;

const { hostname } = window.location;
if (hostname == 'localhost') {
  apiBasePath = 'http://localhost:3333';
} else if (hostname.includes('nr-fom-public') && hostname.includes('devops.gov.bc.ca')) {
  apiBasePath = 'https://' + hostname.replace('fom-admin', 'fom-api');
} else {
  // TODO: May need special case for production vanity URL, or implement solution for dynamically loading from a config map.
  throwError('Unrecognized hostname ' + hostname + ' cannot infer API URL.');
}

const apiConfig = new Configuration({
  basePath: apiBasePath
});

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    ApiModule.forRoot(() => apiConfig),
    SharedModule,
    ApplicationsModule,
    AppRoutingModule,
    RxReactiveFormsModule,
    LeafletModule
  ],
  declarations: [
    HomeProxyComponent,
    ApplicationsProxyComponent,
    AppComponent,
    CommentModalComponent,
    ContactComponent,
    FileUploadComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent
  ],
  providers: [
    ApiService,
    ApplicationService,
    CommentService,
    CommentPeriodService,
    DecisionService,
    DocumentService,
    FeatureService,
    UrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function easingLogic(
  t: number,
  b: number,
  c: number,
  d: number
): number {
  // easeInOutExpo easing
  if (t === 0) {
    return b;
  }
  if (t === d) {
    return b + c;
  }
  t /= d / 2;
  if (t < 1) {
    return (c / 2) * Math.pow(2, 8 * (t - 1)) + b;
  }
  return (c / 2) * (-Math.pow(2, -8 * --t) + 2) + b;
}
