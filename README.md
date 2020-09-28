# HighchartsUpdateChart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.11.

## Development server

Run **ng serve** for a dev server. Navigate to **http://localhost:4200/**. The app will automatically reload if you change any of the source files.

## Problem Recreation
1. Launch Application
2. **Right-click** page and select **Inspect**
3. Click **Console**
4. Click **Select Charts**
5. Click **> Tests**
6. Click **Chart 2** - note the chart change
7. Click **Chart 1** - note the chart change
8. Click in body of **Chart 1**
9. Click **Redraw** - note the chart change
10. Click **Select Charts**
11. Click **Chart 2**
12. Note error:<br>
ERROR Error: Uncaught (in promise): TypeError: Cannot read property 'forExport' of undefined<br>
TypeError: Cannot read property 'forExport' of undefined<br>
    at B.destroy (highcharts.js:337)<br>
    at HighchartsChartComponent.ngOnDestroy (highcharts-angular.js:45)<br>
    at executeOnDestroys (core.js:14418)<br>
    at cleanUpView (core.js:14317)<br>
    at destroyViewTree (core.js:14081)<br>
    at destroyLView (core.js:14268)<br>
    at RootViewRef.destroy (core.js:15133)<br>
    at ComponentRef$1.destroy (core.js:34204)<br>
    at RouterOutlet.deactivate (router.js:9122)<br>
    at ActivateRoutes.deactivateRouteAndOutlet (router.js:4023)<br>
    at resolvePromise (zone-evergreen.js:798)<br>
    at resolvePromise (zone-evergreen.js:750)<br>
    at zone-evergreen.js:860<br>
    at ZoneDelegate.invokeTask (zone-evergreen.js:399)<br>
    at Object.onInvokeTask (core.js:41645)<br>
    at ZoneDelegate.invokeTask (zone-evergreen.js:398)<br>
    at Zone.runTask (zone-evergreen.js:167)<br>
    at drainMicroTaskQueue (zone-evergreen.js:569)<br>
    at ZoneTask.invokeTask [as invoke] (zone-evergreen.js:484)<br>
    at invokeTask (zone-evergreen.js:1621)<br>
