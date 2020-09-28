import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Highcharts-UpdateChart';

  constructor(private route: Router) { }

  ngOnInit() {
    if (localStorage.getItem('customer') === null) {
      localStorage.setItem('customer', '4');
    }

    // Manual entries into the URL cause a reloading of the page.
    // AuthGuard.CanActivate is run when a manual entry is made to the URL.
    // It checks for a logged in user and issues an Alertify if the user is not logged in.
    // However, with the following, the CanActivate is not run and the page is simply reloaded.
    this.route.navigate(['/home']);
  }
}
