import Aszinkron from "../aszinkron.js";
import AdminSzakdogakView from "../view/adminView.js";

class TorolController {

    constructor() {
        const token = $('meta[name="csrf-token"]').attr("content");
        const aszinkron = new Aszinkron(token);

        $('body').on('click', '.Torles-button', (event) => {
            const button = $(event.target);
            const id = button.attr("data-idTor");
            console.log("torol")
            let vegpont = `/szakdogak/${id}`;
            aszinkron.adatTorol(vegpont, this.megjelenit);          
        });
    }


    megjelenit(adat) {
            new AdminSzakdogakView(adat, $("#szakdogak"));
    }
}

export default TorolController