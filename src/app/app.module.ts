import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { CdkTreeModule } from '@angular/cdk/tree';

import { AppComponent } from './app.component';
import { TestRedrawComponent } from './test-redraw/test-redraw.component';
import { ReportingSamplesComponent } from './reporting-samples/reporting-samples.component';
import { TestRedraw2Component } from './test-redraw2/test-redraw2.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
      TestRedrawComponent,
      ReportingSamplesComponent,
      TestRedraw2Component
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HighchartsChartModule,
    MatSidenavModule,
    MatTreeModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    CdkTreeModule
  ],
  providers: [
   {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' }
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
