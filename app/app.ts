import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Aurelia";
    config.map([
      { route: ["", "home"], name: "home", moduleId: "home/home", nav: true, title: "Welcome" },
      { route: ["about"], name: "about", moduleId: "home/about", nav: true, title: "About" }
    ]);

    this.router = router;
  }
}