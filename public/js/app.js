import AdminController from "./controller/adminController.js";
import NemAdminController from "./controller/nemAdminController.js";
import TorolController from "./controller/torolController.js";

class App{
    constructor(){
        console.log("app");
        new NemAdminController();
        new AdminController();
        new TorolController();

    }
}


$(function () {
    new App();
});
