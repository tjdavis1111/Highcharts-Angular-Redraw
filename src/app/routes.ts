import { Routes } from '@angular/router';
import { ReportingSamplesComponent } from './reporting-samples/reporting-samples.component';
import { TestRedrawComponent } from './test-redraw/test-redraw.component';
import { TestRedraw2Component } from './test-redraw2/test-redraw2.component';

export const appRoutes: Routes = [
  { path: '', component: ReportingSamplesComponent },
  // { path: 'home', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'reportingsamples',
        component: ReportingSamplesComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'tests1' },
          { path: 'tests1', component: TestRedrawComponent, data: { category: 'Tests', name: 'Chart 1' } },
          { path: 'tests2', component: TestRedraw2Component, data: { category: 'Tests', name: 'Chart 2' } },
        ],
      },
    ],
  },
  { path: '**', redirectTo: 'reportingsamples', pathMatch: 'full' },
];
