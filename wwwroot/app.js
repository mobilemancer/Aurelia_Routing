var App = (function () {
    function App() {
    }
    App.prototype.configureRouter = function (config, router) {
        config.title = "Aurelia";
        config.map([
            { route: ["", "home"], name: "home", moduleId: "home/home", nav: true, title: "Welcome" },
            { route: ["about"], name: "about", moduleId: "home/about", nav: true, title: "About" }
        ]);
        this.router = router;
    };
    return App;
})();
exports.App = App;
