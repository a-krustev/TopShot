import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationStart, NavigationEnd, RouteConfigLoadEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, map, tap } from 'rxjs';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent {
  title = 'app';

  showMyClass = false;

  constructor(
    private router: Router,
    private pageTitle: Title,
    private location: Location
  ) {
    this.router.events.pipe(
      filter((e): e is ActivationStart => e instanceof ActivationStart),
      map(e => e.snapshot.data?.['title']),
      filter((d) => !!d)
    ).subscribe((pageTitle) => {
      this.pageTitle.setTitle(pageTitle);
    });
  }

  toggleMyClass() {
    this.showMyClass = !this.showMyClass;
  }
}
