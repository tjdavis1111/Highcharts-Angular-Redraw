// tslint:disable: max-line-length
// tslint:disable: member-ordering
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription, fromEvent } from 'rxjs';
import { HelpersService } from '../helpers.service';


/**
 * Each node has a name and an optional list of children and route
 */
interface Node {
  name: string;
  route?: string;
  category?: string;
  children?: Node[];
}

/** Flat node with expandable and level information */
interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

// interface Chart {
//   name: string;
//   route: string;
// }

@Component({
  selector: 'app-reporting-samples',
  templateUrl: './reporting-samples.component.html',
  styleUrls: ['./reporting-samples.component.css']
})
export class ReportingSamplesComponent implements OnInit, OnDestroy {
  // @ViewChild('router')
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  @ViewChild('tree') tree;
  TREE_DATA: Node[];
  children: Node[];
  public name: string;
  currentChart: string;
  opened = false;
  viewPortWidth: number;
  viewPortHeight: number;

  private _transformer = (node: Node, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      category: node.category,
      name: node.name,
      route: node.route,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<FlatNode>(node => node.level, node => node.expandable);
  treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: FlatNode) => node.expandable;

  constructor(private router: Router, private helperService: HelpersService) {
  }

  // ngOnInit() {
  //   this.charts = [];
  //   this.selected = JSON.parse(localStorage.getItem('customer'));

  //   // Get the charts from "routes"
  //   const routes: any = this.router.config[1].children.filter(x => x.path === 'reportingsamples')[0].children.filter(y => y.data != null);
  //   for (let i = 0; i < routes.length; i++) {
  //     const chart: Chart = { route: routes[i].path, name: routes[i].data.name };
  //     this.charts.push(chart);
  //   }

  //   this.name = this.charts[0].name;
  // }

  ngOnInit() {
    // https://stackoverflow.com/questions/35527456/angular-window-resize-event
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
      // console.log('event: ', evt);
      const vp = this.helperService.viewport();
      this.viewPortWidth = vp.width;
      this.viewPortHeight = vp.height;
    });

    const vp2 = this.helperService.viewport();
    this.viewPortWidth = vp2.width;
    this.viewPortHeight = vp2.height;

    this.TREE_DATA = [];
    this.children = [];

    // Get the charts from "routes"
    let lastcategory = '';
    const routes: any = this.router.config[1].children.filter(x => x.path === 'reportingsamples')[0].children.filter(y => y.data != null);

    for (let i = 0; i <= routes.length; i++) {
      if (i === routes.length) {
        const node: Node = { category: 'root', name: lastcategory, children: this.children };
        this.TREE_DATA.push(node);
        break;
      } else if (routes[i].data.category !== lastcategory && lastcategory === '') {
        lastcategory = routes[i].data.category;
      } else if (routes[i].data.category !== lastcategory && lastcategory !== '') {
        const node: Node = { category: 'root', name: lastcategory, children: this.children };
        this.TREE_DATA.push(node);
        lastcategory = routes[i].data.category;
        this.children = [];
      }

      const child: Node = { category: routes[i].data.category, name: routes[i].data.name, route: routes[i].path };
      this.children.push(child);
    }

    this.dataSource.data = this.TREE_DATA;
    this.name = this.dataSource.data[0].children[0].category + ': ' + this.dataSource.data[0].children[0].name;
    this.currentChart = this.dataSource.data[0].children[0].name;
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }

  chartClicked(name: string, category: string) {
    // this.opened = false;
    this.currentChart = this.name;
    this.name = category + ': ' + name;
    // this.tree.treeControl.collapseAll();
  }

  categoryClicked(elementName: any) {
    // Collapse other nodes that may be open
    const otherNodes = this.treeControl.dataNodes.filter((x: any) => x.category === 'root').filter((y: any) => y.name !== elementName);
    for (let i = 0; i < otherNodes.length; i++) {
      this.treeControl.collapse(otherNodes[i]);
    }
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
