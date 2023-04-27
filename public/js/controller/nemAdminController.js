import Aszinkron from "../aszinkron.js";
import NemAdminSzakdogakView from "../view/nemAdminView.js";

class NemAdminController {

    constructor() {
        const token = $('meta[name="csrf-token"]').attr("content");
        const aszinkron = new Aszinkron(token);
        $("#nemAdminGomb").on("click", () => {
            $("#foDiv").html(" ");
            let vegpont = "szakdolgak";
            aszinkron.adatBe(vegpont, this.megjelenit);          
        });
    }
    megjelenit(adat) {
            new NemAdminSzakdogakView(adat, $("#szakdogak"));
    }
}

export default NemAdminController