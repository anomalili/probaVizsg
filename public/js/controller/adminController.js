import Aszinkron from "../aszinkron.js";
import AdminSzakdogakView from "../view/adminView.js";

class AdminController {

    constructor() {
        const token = $('meta[name="csrf-token"]').attr("content");
        const aszinkron = new Aszinkron(token);
        $("#adminGomb").on("click", () => {
            $("#szakdogak").html="";
            let vegpont = "szakdogak";
            aszinkron.adatBe(vegpont, this.megjelenit);          
        });
    }


    megjelenit(adat) {
            new AdminSzakdogakView(adat, $("#szakdogak"));
    }
}

export default AdminController