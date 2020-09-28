# HighchartsUpdateChart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Problem Recreation
1. Launch Application
2. `Right-click` page and select `Inspect`
3. Click `Console`
4. Click `Select Charts`
5. Click `> Tests`
6. Click `Chart 2` - note the chart change
7. Click `Chart 1` - note the chart change
8. Click in body of `Chart 1`
9. Click `Redraw` - note the chart change
10. Click `Select Charts`
11. Click `Chart 2`
12. Note error
ERROR Error: Uncaught (in promise): TypeError: Cannot read property 'forExport' of undefined
TypeError: Cannot read property 'forExport' of undefined
    at B.destroy (highcharts.js:337)
    at HighchartsChartComponent.ngOnDestroy (highcharts-angular.js:45)
    at executeOnDestroys (core.js:14418)
    at cleanUpView (core.js:14317)
    at destroyViewTree (core.js:14081)
    at destroyLView (core.js:14268)
    at RootViewRef.destroy (core.js:15133)
    at ComponentRef$1.destroy (core.js:34204)
    at RouterOutlet.deactivate (router.js:9122)
    at ActivateRoutes.deactivateRouteAndOutlet (router.js:4023)
    at resolvePromise (zone-evergreen.js:798)
    at resolvePromise (zone-evergreen.js:750)
    at zone-evergreen.js:860
    at ZoneDelegate.invokeTask (zone-evergreen.js:399)
    at Object.onInvokeTask (core.js:41645)
    at ZoneDelegate.invokeTask (zone-evergreen.js:398)
    at Zone.runTask (zone-evergreen.js:167)
    at drainMicroTaskQueue (zone-evergreen.js:569)
    at ZoneTask.invokeTask [as invoke] (zone-evergreen.js:484)
    at invokeTask (zone-evergreen.js:1621)
defaultErrorLogger @ core.js:6241
handleError @ core.js:6294
next @ core.js:42627
schedulerFn @ core.js:37132
__tryOrUnsub @ Subscriber.js:183
next @ Subscriber.js:122
_next @ Subscriber.js:72
next @ Subscriber.js:49
next @ Subject.js:39
emit @ core.js:37092
(anonymous) @ core.js:41707
invoke @ zone-evergreen.js:364
run @ zone-evergreen.js:123
runOutsideAngular @ core.js:41501
onHandleError @ core.js:41704
handleError @ zone-evergreen.js:368
runGuarded @ zone-evergreen.js:136
api.microtaskDrainDone @ zone-evergreen.js:670
drainMicroTaskQueue @ zone-evergreen.js:576
invokeTask @ zone-evergreen.js:484
invokeTask @ zone-evergreen.js:1621
globalZoneAwareCallback @ zone-evergreen.js:1647